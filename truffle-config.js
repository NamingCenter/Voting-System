require("dotenv").config();
const HDWalletProvider = require("@truffle/hdwallet-provider");

// 계약이 배포될 계정 자격 증명
const mnemonic = process.env.MNEMONIC;

// API key of your Datahub account for Avalanche Fuji test network
const APIKEY = process.env.APIKEY;

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
    },

    // fuji network라는 것 같다.
    fuji: {
      provider: function () {
        return new HDWalletProvider({
          mnemonic,
          providerOrUrl: `https://avalanche--fuji--rpc.datahub.figment.io/apikey/${APIKEY}/ext/bc/C/rpc`,
          chainId: "0xa869",
        });
      },
      network_id: "*",
      gas: 3000000,
      gasPrice: 470000000000,
      skipDryRun: true,
    },
  },

  solc: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
};
