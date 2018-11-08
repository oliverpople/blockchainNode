import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sender: "",
      receiver: "",
      amount: 0
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateInputSender = this.updateInputSender.bind(this);
    this.updateInputReceiver = this.updateInputReceiver.bind(this);
    this.updateInputAmount = this.updateInputAmount.bind(this);
  }

  updateInputSender(event) {
    this.setState({
      sender: event.target.value
    });
  }

  updateInputReceiver(event) {
    this.setState({
      receiver: event.target.value
    });
  }

  updateInputAmount(event) {
    this.setState({
      amount: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.getNewBlockInputData(this.state);
  }

  render() {
    return (
      <form>
        Sender:
        <input
          value={this.state.sender}
          onChange={this.updateInputSender}
          type="text"
          name="sender"
        />
        Receiver:
        <input
          value={this.state.receiver}
          onChange={this.updateInputReceiver}
          type="text"
          name="receiver"
        />
        Amount:
        <input
          value={this.state.amount}
          onChange={this.updateInputAmount}
          type="text"
          name="amount"
        />
        <input type="submit" onClick={this.handleSubmit} />
      </form>
    );
  }
}

export default Form;
