class Transaction {
  constructor(inputs, outputs, signature, txFee, utxos) {
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
      this.utxos.push(output);
    });
  }
}

module.exports = Transaction;
