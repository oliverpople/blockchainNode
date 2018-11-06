import React, { Component } from "react";

const Block = () => <h3> Block </h3>;

class Blockchain extends Component {
  // // Fetch the list on first mount
  // componentDidMount() {
  //   this.getList();
  // }
  //
  // // Retrieves the list of items from the Express app
  // getList = async () => {
  //   const response = await fetch("/api/blockchain");
  //   const body = await response.json();
  //   console.log(body);
  // };

  render() {
    return (
      <div>
        <h2> BlockChain </h2>
        <Block />
      </div>
    );
  }
}

export default Blockchain;
