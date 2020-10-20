const {PUBLIC_KEY} = require('../config');

class Wallet {
  constructor(publicKey) {
    this.accessKey = publicKey,
    this.utxoIds = [];
  }

  pushAddress(publicKey, db) {
    db.blockchain.addAddress(publicKey);
  }

  getBalance(db) {
    db.blockchain.getBalance()
  }

}

module.exports = Wallet;