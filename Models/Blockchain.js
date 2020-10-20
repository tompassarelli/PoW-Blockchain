const fs = require('fs');

class Blockchain {
  // init blockchain with no blocks if no file exists
  // if file exists, then it should bootstrap with all existing work
  constructor() {
    this.blocks = [];
    this.addresses = [];
  }

  loadBlocks() {
  
    try {
      let rawdata = fs.readFileSync('blockchain.json');
      this.blocks.push(JSON.parse(rawdata))
      // this.setHead()
    } catch (err) {
      console.log(err)
      console.log('you may still start the blockchain from ground zero')
    }
  }
  // should also have merkle root
  addBlock(block) {
    this.blocks.push(block)
    // setHead()
  }

  // setHead() {
  //   this.head = this.blocks.length -1
  // }

  saveChain(Blockchain) {
    var data = JSON.stringify(Blockchain);
    fs.writeFile('blockchain.json', data, function (err) {
      if (err) return console.log(err); 
      console.log(`${data} > blockchain.json`);
    })
  }

  blockHeight() {
    return this.blocks.length;
  }

  addAddress(publicKey) {
    // somehow the blockchain will need to verify via a signed transaction it is ok
    // to add this address to the public address space
    this.addresses.push(publicKey)
  }

  getUtxosByAddress(publicKey) {

    var utxoids = {};

    this.blocks.forEach((block) => {
      block.transactions.forEach((tx) => {
        tx.utxos.forEach((utxo) => {
          if (tx.utxo.owner = publicKey && !tx.utxo.spent) {
            utxoids[tx.utxo.id].push(tx.utxo.id);
          }
        })
      })
    })
    
    return utxoids
  }

  getBalance(address) {
    return this.addresses[address]
  }
}

module.exports = Blockchain;