const SHA256 = require('crypto-js/sha256');

class Block {
  // the miner has a mempool that eventually resolves transactions/UTXOs onto the block
  // so the block itself need only contain public key of miner / transactions
  // that contain UTXO ownership transformations / timestamp / nonce
  // hash of block is added to blockchain 
  constructor() {
    this.timestamp = Date.now()
    this.nonce = 0;
    this.transactions = [];
    this.txHash = "";
  }
  addTransaction(tx) {
    this.transactions.push(tx)
  }
  hash() {
    return SHA256(
      this.timestamp + "" +
      this.nonce + "" +
      JSON.stringify(this.transactions)
    ).toString();
  }
}

module.exports = Block;