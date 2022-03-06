require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url:
        "https://eth-rinkeby.alchemyapi.io/v2/QpnCoroFLlnjxbaRoGOhsZMowHBvzg68",
      accounts: [
        "c8a07b42550504251beb64faa0c282e68ff6d5869b749fb5fbc996dd39bbe3bb",
      ],
    },
  },
};
