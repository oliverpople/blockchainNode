import _ from "lodash";
import React, { Component } from "react";
import Block from "./Block";
import Form from "./Form";

class Blockchain extends Component {
  state = {
    chain: []
  };

  componentDidMount() {
    this.getChain()
      .then(res => {
        const APIchainString = res.POPLECoin.chain;
        this.setState({ chain: APIchainString });
      })
      .catch(err => console.log(err));
  }

  getChain = async () => {
    const response = await fetch("/api/blockchain");
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  renderBlocks(chainData) {
    const blockListJSX = _.map(
      chainData,
      ({ index, data, hash, prevHash, timestamp }) => {
        var prevHashChecker = "";
        prevHash === 0
          ? (prevHashChecker = "0")
          : (prevHashChecker = prevHash.words);
        // Could an introduce further ES6 destructing to remove repitiom of 'data'
        return (
          <Block
            key={index}
            type="text"
            component={Block}
            sender={data.sender}
            receiver={data.receiver}
            amount={data.amount}
            prevHash={prevHashChecker}
            hash={hash.words}
            timestamp={timestamp}
          />
        );
      }
    );
    return blockListJSX;
  }

  getNewBlockInputData = async newBlockData => {
    const updatedBlockchain = await this.addNewBlock(
      this.state.chain,
      newBlockData
    );
    this.setState({ chain: updatedBlockchain.POPLECoin.chain });
  };

  addNewBlock = async (currentChain, newBlockData) => {
    let fetchData = {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        currentChain: currentChain,
        newBlockData: newBlockData
      })
    };
    const response = await fetch("/api/blockchain/addblock", fetchData);
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  render() {
    let chainData = this.state.chain;
    return (
      <div>
        <h2> BlockChain </h2>
        {this.renderBlocks(chainData)}
        <Form getNewBlockInputData={this.getNewBlockInputData} />
      </div>
    );
  }
}

export default Blockchain;
