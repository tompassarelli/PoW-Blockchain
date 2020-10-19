const {PUBLIC_KEY} = require('../config');
const blockchain = require('./Blockchain')
const walletmain = require('./WalletMain')

class Wallet {
  constructor(publicKey) {
    this.blockchain = blockchain,
    this.publicKey = publicKey
  }

  pushAddress(publicKey) {
    blockchain.addAddress(publicKey);
  }

}

module.exports = Wallet;