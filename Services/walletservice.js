const WalletMain = require('../Models/WalletMain')

// this is going to have to be a three tier architecture where users first authenticate with 
// wallet service (1), then they get their specific account in the wallet address space (2)
// which then sends transactions referencing an address(key) in the blockchain space

const walletservice = {
  walletservice: new WalletMain()
}

module.exports = walletservice;