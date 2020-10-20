const EC = require('elliptic').ec;
const ec = new EC('secp256k1');
const wallet = require('./Wallet')

class WalletMain {
  constructor() {
   // this.wallets = wallet.forEach((wallet) => {
      this.wallets = wallet
    //})
  }

  genWallet() {

    const key = ec.genKeyPair();
    const privateKey = key.getPrivate().toString(16);
    const publicKey = key.getPublic().encode('hex');
    console.log(`${privateKey} ${publicKey} store your private key in the safest of locations!`);

    wallet.init(publicKey)
    wallet.pushAddress()
  }
}


module.exports = WalletMain;