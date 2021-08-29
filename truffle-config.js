const HDWalletProvider = require('@truffle/hdwallet-provider');
//const { PrivateKey, ApiKey} = require("./env.js");
// const infuraKey = "fj4jll3k.....";
//
//const fs = require('fs');
//const mnemonic = fs.readFileSync(".secret").toString().trim();
const PrivateKey = "";

module.exports = {
  networks: {
    develop: {
     host: "127.0.0.1",     // Localhost (default: none)
     port: 8545,            // Standard Ethereum port (default: none)
     network_id: "*",       // Any network (default: none)
     from: "0x266626BC2bb7C645ce958DA731E2C3F4705E8d87"
    },
    ropsten: {
    provider: () => new HDWalletProvider(PrivateKey, `https://ropsten.infura.io/v3/YOUR-PROJECT-ID`),
    network_id: 3,       // Ropsten's id
    gas: 5500000,        // Ropsten has a lower block limit than mainnet
    confirmations: 5,    // # of confs to wait between deployments. (default: 0)
    timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
    skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },
    testnet: {
      provider: () => new HDWalletProvider(PrivateKey, `https://data-seed-prebsc-1-s1.binance.org:8545`),
      gas: 6897127,
      network_id: 97,
      confirmations: 10,
      timeoutBlocks: 200,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    bsc: {
      provider: () => new HDWalletProvider(PrivateKey, `https://bsc-dataseed1.binance.org`),
      gasPrice: 5 * 10 ** 9,
      gas: 8164631,
      network_id: 56,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.0", // A version or constraint - Ex. "^0.5.0"
      settings: {
        optimizer: {
          enabled: true,
          runs: 1500
        }
      }
    }
  },
  plugins: [
    'truffle-plugin-verify'
  ],
  api_keys: {
    bscscan: ""
  },

  db: {
    enabled: false
  }
}
