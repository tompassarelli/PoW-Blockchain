// when the blockchain is 
const Blockchain = require('./models/Blockchain');

const db = {
  blockchain: new Blockchain(),
}

db.blockchain.loadBlocks();

module.exports = db;
