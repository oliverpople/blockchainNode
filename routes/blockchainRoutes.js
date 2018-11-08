const Blockchain = require("../BlockChain");

module.exports = app => {
  app.get("/api/blockchain", async (req, res) => {
    const POPLECoin = new Blockchain();

    POPLECoin.addBlock({
      sender: "Bruce wayne",
      receiver: "Tony stark",
      amount: 100
    });
    POPLECoin.addBlock({
      sender: "Harrison wells",
      receiver: "Han solo",
      amount: 50
    });
    POPLECoin.addBlock({
      sender: "Tony stark",
      receiver: "Ned stark",
      amount: 75
    });

    res.send({ POPLECoin });
  });

  app.post("/api/blockchain/addblock", async (req, res) => {
    // console.log(req);
    // const POPLECoin = new Blockchain();
    // POPLECoin.chain = req.chain
    //
    // POPLECoin.addBlock({
    //   sender: "Tony stark",
    //   receiver: "Ned stark",
    //   amount: 75
    // });
    //
    res.send({ express: "HELLO THERE!" });
  });
};
