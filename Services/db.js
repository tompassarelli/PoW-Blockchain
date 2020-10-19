// when the blockchain is 
const Blockchain = require('./models/Blockchain');

const db = {
  blockchain: new Blockchain(),
}

module.exports = db;
