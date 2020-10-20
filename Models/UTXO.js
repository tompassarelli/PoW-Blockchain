class UTXO {
  constructor(owner, amount, id) {
    this.id = id;
    this.owner = owner;
    this.amount = amount;
    this.spent = false;
  }
}

module.exports = UTXO;
