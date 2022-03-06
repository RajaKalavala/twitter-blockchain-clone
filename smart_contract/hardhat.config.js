require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/QpnCoroFLlnjxbaRoGOhsZMowHBvzg68",
      accounts: [""],
    },
  },
};
