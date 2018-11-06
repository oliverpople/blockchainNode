import React, { Component } from "react";

const Block = () => <h3> Block </h3>;

class Blockchain extends Component {
  state = {
    response: ""
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch("/api/blockchain");
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  render() {
    return (
      <div>
        <h2> BlockChain </h2>
        <p>{this.state.response}</p>
        <Block />
      </div>
    );
  }
}

export default Blockchain;
