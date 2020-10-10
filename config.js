const { ether, BN } = require("@openzeppelin/test-helpers");

let config = {};

config.timer = {
  startTime: 1602560640,
  hardCapTimer: 43200,
  softCap: ether("500"),
};

config.redeemer = {
  redeemBP: 1000,
  redeemInterval: 3600,
  bonusRangeStart: [
    ether("0"),
    ether("100"),
    ether("200"),
    ether("300"),
    ether("500")
  ],
  bonusRangeBP: [
    2500,
    2000,
    1500,
    1250,
    1000
  ],
};

config.presale = {
  maxBuyPerAddress: ether("25"),
  uniswapEthBP: 6000,
  uniswapLidEthBP: 1000,
  uniswapTusdEthBP: 500,
  lidEthBP: 500,
  referralBP: 250,
  hardcap: ether("1000"),
  token: "0x6e0dade58d2d89ebbe7afc384e3e4f15b70b14d8",
  uniswapRouter: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
  lidFund: "0xb63c4F8eCBd1ab926Ed9Cb90c936dffC0eb02cE2",
  access: "0xfD8e59814D601219bddd53879ADa1Ff75fD316e2",
  marketingFund: "0x0dcde65569120c231A6C63D676C331b92A3605B2",
  projectFund: "0x715B78C6f518a918155E318217703EBE4BB090cB",
  teamFund: "0x16836815caf337A228E077F1aFa0283A30d433CE",
  lidLiqLocker: "0x5d05eEF83499789fD2d3e6b2A7483430B40A0325",
  tusdLiqLocker: "0x52083d6A1680d42D8Fd2cD2e2F9edD18858bAcD9",
  tokenPoolsBP: {
    marketing: 500,
    team: 1000,
    lidFee: 100,
    project: 3418,
    liquidity: 1586,
    presale: 3000,
    lidLiq: 264,
    tusdLiq: 132
  }
};

config.timelock = {
  releaseInterval: 2592000,
  releaseBP: 1000,
  owner: "0x4735581201F4cAD63CCa0716AB4ac7D6d9CFB0ed"
}

module.exports = config;
