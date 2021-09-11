require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  networks: {
    "rinkeby": {
      url: "https://eth-rinkeby.alchemyapi.io/v2/r6jD2avcUlPKpvn9D2shM-i-weEA51Rl",
      accounts: [`1fde47b15c38f17a18d67747e4b730d33ea4d9f02624778a34063279e448308c`],
    },
  },
};
