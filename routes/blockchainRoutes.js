const Blockchain = require("../BlockChain");

module.exports = app => {
  app.get("/api/blockchain", async (req, res) => {
    res.send({ express: "Blocks from express init" });
  });
};
