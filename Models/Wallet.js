const {PUBLIC_KEY} = require('../config');

class Wallet {
  constructor() {
    this.accessKey = PUBLIC_KEY;
    this.utxoIds = [];
  }

  pushAddress(publicKey, db) {
    db.blockchain.addAddress(publicKey);
  }

  getBalance(db) {
    db.blockchain.getBalance()
  }

  collectUTXOs() {

  }
}

module.exports = Wallet;