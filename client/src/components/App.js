import React, { Component } from "react";

import BlockChain from "./Blockchain";

class App extends Component {
  render() {
    return (
      <div className="App" style={{ margin: "0 20px" }}>
        <BlockChain />
      </div>
    );
  }
}

export default App;
