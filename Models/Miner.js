const Block = require('./Block');
const Transaction = require('./Transaction');
const UTXO = require('./UTXO');
const {PUBLIC_KEY} = require('../config');
const TARGET_DIFFICULTY = BigInt("0x0" + "F".repeat(63));
const BLOCK_REWARD = 10;


class Miner {
  // todo - mempool could be saved?
  constructor() {
    this.mempool = [];
    this.mining = false;
    this.validating = false;
  }

  startMining() {
    this.mining = true;
    mine();
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

    const coinbaseUTXO = new UTXO(PUBLIC_KEY, BLOCK_REWARD);
    const coinbaseTX = new Transaction([], [coinbaseUTXO]);
    block.addTransaction(coinbaseTX);
    
    
    block.addTransaction(this.mempool.pop())

    while(BigInt('0x' + block.hash()) >= TARGET_DIFFICULTY) {
      block.nonce++;
    }

    db.blockchain.addBlock(block);

    console.log(`Mined block #${db.blockchain.blockHeight()} with a hash of ${block.hash()} at nonce ${block.nonce}`);

    setTimeout(mine, 2500);
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

    const coinbaseUTXO = new UTXO(PUBLIC_KEY, BLOCK_REWARD);
    const coinbaseTX = new Transaction([], [coinbaseUTXO]);
    block.addTransaction(coinbaseTX);
    
    
    block.addTransaction(this.mempool.pop())

    while(BigInt('0x' + block.hash()) >= TARGET_DIFFICULTY) {
      block.nonce++;
    }

    db.blockchain.addBlock(block);

    console.log(`Mined block #${db.blockchain.blockHeight()} with a hash of ${block.hash()} at nonce ${block.nonce}`);

    setTimeout(mine, 2500);
  }


}

module.exports = Miner;