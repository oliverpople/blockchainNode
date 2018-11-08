import _ from "lodash";
import React, { Component } from "react";
import sampleData from "./sampleData";
import Block from "./Block";

class Blockchain extends Component {
  state = {
    chain: []
  };

  componentDidMount() {
    this.callApi()
      .then(res => {
        const APIchainString = res.POPLECoin.chain;
        this.setState({ chain: APIchainString });
      })
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch("/api/blockchain");
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  renderBlocks(chainData) {
    // Try an introduce ES6 destructing to remove repitiom of 'block'
    const blockListJSX = chainData.map(block => {
      var prevHash = "";
      console.log(prevHash);
      if (block.prevHash === 0) {
        prevHash = "0";
      } else {
        prevHash = block.prevHash.words;
        console.log(prevHash);
      }
      return (
        <Block
          key={block.index}
          type="text"
          component={Block}
          sender={block.data.sender}
          receiver={block.data.receiver}
          amount={block.data.amount}
          prevHash={prevHash}
          hash={block.hash.words}
          timestamp={block.timestamp}
        />
      );
    });
    return blockListJSX;
  }

  render() {
    let chainData = this.state.chain;
    return (
      <div>
        <h2> BlockChain </h2>
        {this.renderBlocks(chainData)}
      </div>
    );
  }
}

export default Blockchain;
