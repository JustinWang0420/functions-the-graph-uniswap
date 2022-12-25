const networkConfig = {
    default: {
        name: "hardhat",
        fee: "100000000000000000",
        keyHash: "0xd89b2bf150e3b9e13446986e571fb9cab24b13cea0a43ea20a6049a85cc807cc",
        jobId: "29fa9aa13bf1468788b7cc4a500a45b8",
        fundAmount: "1000000000000000000",
        automationUpdateInterval: "30",
    },
    31337: {
        name: "localhost",
        fee: "100000000000000000",
        keyHash: "0xd89b2bf150e3b9e13446986e571fb9cab24b13cea0a43ea20a6049a85cc807cc",
        jobId: "29fa9aa13bf1468788b7cc4a500a45b8",
        fundAmount: "1000000000000000000",
        automationUpdateInterval: "30",
        ethUsdPriceFeed: "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419",
        deployerMnemonic:
            "repair craft aspect trophy height matrix pool basket category west boat solar",
        ocr2odPublicKey:
            "971f006163a12ee3383a00d7743334480d6b1c83fdf60497e0c520b16d1a4ee421cc61375679b63466156fee6f2f1da5a7e630ba0b1cddb2704ef907ead223db",
        mockOcr2odPrivateKey: "0x09768a19def4dce2b6793d7dc807828ef47b681709cf1005627a93f0da9c8065",
    },
    1: {
        name: "mainnet",
        linkToken: "0x514910771af9ca656af840dff83e8264ecf986ca",
        fundAmount: "0",
        automationUpdateInterval: "30",
    },
    5: {
        name: "goerli",
        linkToken: "0x326c977e6efc84e512bb9c30f76e30c160ed06fb",
        ethUsdPriceFeed: "0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e",
        linkUsdPriceFeed: "0x47Db76c9c97F4bcFd54D8872FDb848Cab696092d",
        linkEthPriceFeed: "0xb4c4a493AB6356497713A78FFA6c60FB53517c63", // TODO remove me
        keyHash: "0x79d3d8832d904592c0bf9818b621522c988bb8b0c05cdc3b15aea1b6e8db0c15",
        vrfCoordinator: "0x2Ca8E0C643bDe4C2E08ab1fA0da3401AdAD7734D",
        ocr2odOracle: "0xBAE17CF0694dF955F715D2eDC6cF0C86246Ed7Af",
        ocr2odOracleFactory: "0x5b2E2a078c6CF99c7Aa61555034CaD28cA08a54f",
        ocr2odOracleRegistry: "0x70511301892257bbD0071043E41385dF40Cd99f5",
        ocr2odPublicKey:
            "971f006163a12ee3383a00d7743334480d6b1c83fdf60497e0c520b16d1a4ee421cc61375679b63466156fee6f2f1da5a7e630ba0b1cddb2704ef907ead223db", // TODO remove me
        jobId: "ca98366cc7314957b8c012c72f05aeeb",
        fee: "100000000000000000",
        fundAmount: "100000000000000000", // 0.1
        automationUpdateInterval: "30",
    },
    137: {
        name: "polygon",
        linkToken: "0xb0897686c545045afc77cf20ec7a532e3120e0f1",
        ethUsdPriceFeed: "0xF9680D99D6C9589e2a93a78A04A279e509205945",
        jobId: "12b86114fa9e46bab3ca436f88e1a912",
        fee: "100000000000000",
        fundAmount: "100000000000000",
    },
    80001: {
        name: "mumbai",
        linkToken: "0x326C977E6efc84E512bB9C30f76E30c160eD06FB",
        linkEthPriceFeed: "0x12162c3E810393dEC01362aBf156D7ecf6159528",
        linkUsdPriceFeed: "0x1C2252aeeD50e0c9B64bDfF2735Ee3C932F5C408",
        ethUsdPriceFeed: "0x0715A7794a1dc8e42615F059dD6e406A6594651A",
        ocr2odOracle: "0x0e9C779d5f2aDe5cf642433C584904B249441eFb",
        ocr2odOracleFactory: "0xF4387B2Ad01B479d1ba18e9A101C35d96A83d5a5",
        ocr2odOracleRegistry: "0xE7e4882E6cc98b4c20A5155ca83A18C85aaBfCe6",
        fee: "100000000000000000",
        fundAmount: "100000000000000000", // 0.1
        automationUpdateInterval: "30",
        ocr2odPublicKey: "971f006163a12ee3383a00d7743334480d6b1c83fdf60497e0c520b16d1a4ee421cc61375679b63466156fee6f2f1da5a7e630ba0b1cddb2704ef907ead223db",
    },
}

const developmentChains = ["hardhat", "localhost"]
const VERIFICATION_BLOCK_CONFIRMATIONS = 2

module.exports = {
    networkConfig,
    developmentChains,
    VERIFICATION_BLOCK_CONFIRMATIONS,
}
