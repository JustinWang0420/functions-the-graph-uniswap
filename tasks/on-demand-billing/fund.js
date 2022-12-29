const { getNetworkConfig } = require('../utils/utils')
const { VERIFICATION_BLOCK_CONFIRMATIONS, developmentChains } = require('../../helper-hardhat-config')

task('on-demand-sub-fund', 'Funds a billing subscription for On-Demand Consumer contracts')
  .addParam('amount', 'Amount to fund subscription in LINK')
  .addParam('subid', 'Subscription ID to fund')
  .setAction(async (taskArgs) => {
    if (developmentChains.includes(network.name)) {
      throw Error('This command cannot be used on a local development chain.  Please specify a valid network or simulate an OnDemandConsumer request locally with "npx hardhat on-demand-simulate".')
    }

    const networkConfig = getNetworkConfig(network.name)

    const subscriptionId = taskArgs.subid
    const linkAmount = taskArgs.amount

    const RegistryFactory = await ethers.getContractFactory('OCR2DRRegistry')
    const registry = await RegistryFactory.attach(networkConfig['ocr2drOracleRegistry'])

    // Check that the subscription is valid
    let preSubInfo
    try {
      preSubInfo = await registry.getSubscription(subscriptionId)
    } catch (error) {
      if (error.errorName === 'InvalidSubscription') {
        throw Error(`Subscription ID "${subscriptionId}" is invalid or does not exist`)
      }
      throw error
    }

    // Convert LINK to Juels
    const juelsAmount = ethers.utils.parseUnits(linkAmount)
    console.log(`Funding subscription ${subscriptionId} with ${ethers.utils.formatEther(juelsAmount)} LINK`)

    const LinkTokenFactory = await ethers.getContractFactory('LinkToken')
    const linkToken = await LinkTokenFactory.attach(networkConfig.linkToken)

    const accounts = await ethers.getSigners()
    const signer = accounts[0]

    // Ensure sufficent balance
    const balance = await linkToken.balanceOf(signer.address)
    if (juelsAmount.gt(balance)) {
      throw Error(
        `Insufficent LINK balance. Trying to fund subscription with ${ethers.utils.formatEther(
          juelsAmount
        )} LINK, but wallet only has ${ethers.utils.formatEther(balance)}.`
      )
    }

    // Fund the subscription with LINK
    const fundTx = await linkToken.transferAndCall(
      networkConfig['ocr2drOracleRegistry'],
      juelsAmount,
      ethers.utils.defaultAbiCoder.encode(['uint64'], [subscriptionId])
    )

    const waitBlockConfirmations = developmentChains.includes(network.name) ? 1 : VERIFICATION_BLOCK_CONFIRMATIONS
    console.log(`Waiting ${waitBlockConfirmations} blocks for transaction ${fundTx.hash} to be confirmed...`)
    await fundTx.wait(waitBlockConfirmations)

    const postSubInfo = await registry.getSubscription(subscriptionId)

    console.log(`Subscription ${subscriptionId} funded with ${ethers.utils.formatEther(postSubInfo[0])} LINK`)
  })
