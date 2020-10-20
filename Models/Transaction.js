const {VERSION} = require('../config')
const utxos = require('./UTXO');

class Transaction {
  // ok so each input should look like "alice: 5btc or a:5btc bill:3btc"
  constructor(inputs, outputs, signature, txFee, txID, version) {
    this.version = VERSION;
    this.txID = 0;
    this.inputs = inputs; 
    this.outputs = outputs;
    this.signature = signature;
    this.txFee = txFee;
    this.utxos = utxos;
  }
  execute() {
    this.inputs.forEach((input) => {
      input.spent = true;
    });
    this.outputs.forEach((output) => {
      this.utxos.push({
        
      });
    });
  }
}

module.exports = Transaction;
