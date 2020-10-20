
class CoinbaseTX {
  // ok so each input should look like "alice: 5btc or a:5btc bill:3btc"
  constructor(version, txFee, signature) {
    this.version = version;
    this.inputs = "";
    this.outputs = "";
    this.txID = "";
    this.txFee = txFee;
    this.signature = signature;
    this.blockreward = 5;
  }
  execute() {
    this.outputs.forEach((output) => {
      output.spent = false;
    });
  }
}

module.exports = CoinbaseTX;
