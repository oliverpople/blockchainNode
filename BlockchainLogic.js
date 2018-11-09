const Block = require("./BlockLogic.js");

module.exports = class Blockchain {
  constructor() {
    this.chain = [];
  }

  addBlock(data) {
    let index = this.chain.length;
    let prevHash =
      this.chain.length !== 0 ? this.chain[this.chain.length - 1].hash : 0;
    let block = new Block(index, data, prevHash);

    this.chain.push(block);
  }

//   chainIsValid() {
//     for (var i = 0; i < this.chain.length; i++) {
//       if (this.chain[i].hash !== this.chain[i].getHash()) return false;
//
//       if (i > 0 && this.chain[i].prevHash !== this.chain[i - 1].hash)
//         return false;
//     }
//
//     return true;
//   }
// };
//
// console.log("Validity: ", CILCoin.chainIsValid());
// CILCoin.chain[0].data.reciver = "Joker";
// console.log("Validity: ", CILCoin.chainIsValid());
