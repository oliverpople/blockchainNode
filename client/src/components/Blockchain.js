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
        // Add hygeine middleware function for turning API response into react properties
        // const APIchainString = JSON.stringify(res.POPLECoin.chain);
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

  // renderBlocks(chainData) {
  //   return chainData.map(
  //     block => ({ index, data, preHash, hash, timestamp }) => {
  //       return (
  //         <Block
  //           key={index}
  //           type="text"
  //           component={Block}
  //           sender={data.sender}
  //           receiver={data.receiver}
  //           amount={data.amount}
  //           preHash={preHash}
  //           hash={hash}
  //           timestamp={timestamp}
  //         />
  //       );
  //     }
  //   );
  // }

  renderBlocks(chainData) {
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
        <div key={block.index} style={{ width: 400 }}>
          <h3> Index: {block.index} </h3>
          <h3> Sender: {block.data.sender} </h3>
          <h3> Receiver: {block.data.receiver} </h3>
          <h3> Amount: {block.data.amount} </h3>
          <h3> Previous Hash: {prevHash} </h3>
          <h3> Hash: {block.hash.words} </h3>
          <h3> Timestamp: {block.timestamp} </h3>
        </div>
      );
    });
    return blockListJSX;

    // const blocks = chainData.map(block => {
    // return (
    //   <Block
    //     key={block.index}
    //     type="text"
    //     component={Block}
    //     sender={block.data.sender}
    //     receiver={block.data.receiver}
    //     amount={block.data.amount}
    //     preHash={block.preHash}
    //     hash={block.hash}
    //     timestamp={block.timestamp}
    //   />
    // );
    // console.log(blocks);
    // });
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
