const {miner} = require('../Services/miner')
const {walletservice} = require('../Services/walletservice')
const {startMining, stopMining} = require('../Services/miner');
const {blockchain} = require('../Services/db');
const {PORT} = require('../config');
const express = require('express');
const app = express();
const cors = require('cors');

// localhost can have cross origin errors
// depending on the browser you use!
app.use(cors());
app.use(express.json());

miner.startMining();

app.post('/', (req, res) => {
  const {method, params} = req.body;
  if(method === 'startMining') {
      startMining();
      res.send({ blockNumber: blockchain.blockHeight() });
      return;
  }
  if(method === 'stopMining') {
      stopMining();
      res.send({ blockNumber: blockchain.blockHeight() });
      return;
  }
  if(method === "getBalance") {
      const [address] = params;
      const ourUTXOs = blockchain.utxos.filter(x => {
        return x.owner === address && !x.spent;
      });
      const sum = ourUTXOs.reduce((p,c) => p + c.amount, 0);
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
