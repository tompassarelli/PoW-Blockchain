class Transaction {
  // ok so each input should look like "alice: 5btc or a:5btc bill:3btc"
  constructor(version, inputs, outputs, txid, txFee, signature) {
    this.version = version;
    this.inputs = inputs; 
    this.outputs = outputs;
    this.txID = txid;
    this.txFee = txFee;
    this.signature = signature;
  }
  execute() {
    this.inputs.forEach((input) => {
      input.spent = true;
    });
    this.outputs.forEach((output) => {
      output.spent = false;
    });
  }
}

module.exports = Transaction;
