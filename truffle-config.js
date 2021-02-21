'use strict';
const Web3 = require('web3');
const HDWalletProvider = require("@truffle/hdwallet-provider");
const fs = require('fs');
const costonRPC = "https://costone.flare.network/ext/bc/C/rpc";
let rawdata = fs.readFileSync('../costonAccount.json');
let costonAccount = JSON.parse(rawdata);

module.exports = {
  networks: {
    coston: {
      provider: function() { 
        return new HDWalletProvider(costonAccount.privateKey, costonRPC); 
      }, 
      network_id: "*",
      gasPrice: 20000000000,
      gas: 1000000
    }
  }
};
