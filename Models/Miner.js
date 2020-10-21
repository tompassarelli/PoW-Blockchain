const {VERSION} = require('../config')
const Block = require('./Block');
const Transaction = require('./Transaction');
const {PUBLIC_KEY} = require('../config');
const TARGET_DIFFICULTY = BigInt("0x000" + "F".repeat(61));
const BLOCK_REWARD = 10;


class Miner {
  // todo - mempool could be saved?
  constructor() {
    this.mempool = [{}];
    this.mining = false;
    this.validating = false;
  }

  mempoolTest() {

    var tx = new Transaction({
      VERSION: VERSION,
      inputs: [{
        to: "address",
        from: "address" 
      }],
      outputs:  [{
        to: "address",
        from: "address" 
      }],
      txID: "hash",
      txFee: 3,
      signature: 4104104,
    })
    this.mempool.push(tx)
  }

  setBlockchain(db) {
    this.blockchain = db;
  }

  startMining() {
    console.log(this.mining)
    this.mining = true;
    console.log(this.mining)
    this.mine();
  }

  stopMining() {
    this.mining = false;
  }

  addMempool(tx) {
    //an account on the network has UTXOS 
    //how is the account going to keep track of there UTXOs?
    //...miners basically have to send the outputs to appropriate address after validating block
    //
    //a user can access functions on the account (send funds for ex) 
    //if transaction fee > allowed amount -> push to mempool
    if(tx.txFee > 2) {
        this.mempool.push(tx)
    }
      
  }


  // after mining the miner should propagate the new block and continue mining the next block 
  // there needs to be some sort of interupt handler such that perhaps the miner can will opt 
  // to allow its mine function to be interupted if its clear it has fallen behind the longest chain by at least 2 blocks
  // one way to do this is to simply check if the "head" of local blockchain is behind a arg blockchain with head - 2 >= localhead 

  // TODO : add sync functin to miner

  // TODO
  validate(block) {
    if(!this.validating) {
      console.log("call StartValidating to begin validating")
      return;
    } 
    if(this.mining) {
      console.log("turn off your miner with stopMining to start validating")
      return;
    } 
  }

  addTransaction(block, tx) {
    block.transactoins.push(tx);
  }

  mine() {
    if(this.validating) {
      console.log("stop validating to mine")
      return;
    } 
    if(!this.mining) {
      console.log("call startMining to turn on miner")
      return;
    } 
    // after instantiating block we will need to wait for a transaction to be mined while none exist in mempool
    const block = new Block();

    //const coinbaseUTXO = new Transaction(
    //  null, 
    //  null, 
    //  PUBLIC_KEY, 
    //  BLOCK_REWARD);
    //block.addTransaction(coinbaseTX);
    
    while(block.txHash >= TARGET_DIFFICULTY) {
      block.nonce++;
      block.txHash = BigInt('0x' + block.hash());
    }
    
    this.blockchain.addBlock(block);

    console.log(`Mined block #${this.blockchain.blockHeight()} with a hash of ${block.hash()} at nonce ${block.nonce}`);
   
    setTimeout(this.mine.bind(this), 1000);

  }
}

module.exports = Miner;