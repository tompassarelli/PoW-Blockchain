const {miner} = require('../Services/miner');
const {walletservice} = require('../Services/walletservice');
const {db} = require('../Services/db');
const {PORT} = require('../config');
const express = require('express');
const app = express();
const cors = require('cors');

// localhost can have cross origin errors
// depending on the browser you use!
app.use(cors());
app.use(express.json());

console.log(db.blockchain);
miner.setBlockchain(db.blockchain);
miner.startMining();

app.post('/', (req, res) => {
  const {method, params} = req.body;
  if(method === 'startMining') {
      miner.startMining();
      res.send({ blockNumber: db.blockchain.blockHeight() });
      return;
  }
  if(method === 'stopMining') {
      miner.stopMining();
      res.send({ blockNumber: db.blockchain.blockHeight() });
      return;
  }
  if(method === "getBalance") {
      //walletservice
      res.send({ balance: sum.toString()});
  }
  if(method === "listWallets") {
    res.send({ balance: walletservice.foreach((wallet) => {
      console.log(wallet);
      })}
    )
  }
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}!`);
});
