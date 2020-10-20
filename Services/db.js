// when the blockchain is 
const Blockchain = require('../Models/Blockchain');

const db = {
  blockchain: new Blockchain(),
}

//db.blockchain.loadBlocks();

module.exports = {db};
