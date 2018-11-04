import React, { Component } from "react";

const Block = () => <h3> Block </h3>;

class Blockchain extends Component {
  render() {
    return (
      <div>
        <h2> BlockChain </h2>
        <Block />;
      </div>
    );
  }
}

export default Blockchain;
