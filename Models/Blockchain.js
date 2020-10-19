const fs = require('fs');

class Blockchain {
  // init blockchain with no blocks if no file exists
  // if file exists, then it should bootstrap with all existing work
  constructor() {
    this.block = [];
    this.addresses = [];
  }

  constructor(localdb) {
  
    try {
      let rawdata = fs.readFileSync('blockchain.json');
      this.blocks.push(JSON.parse(rawdata))
      // this.setHead()
    } catch (err) {
      console.log(err)
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
    this.addresses.push(publicKey);
  }
}

module.exports = Blockchain;