import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateInput = this.updateInput.bind(this);
  }

  updateInput(event) {
    this.setState({
      inputValue: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.getNewBlockInputData(this.state.inputValue);
  }

  render() {
    return (
      <form>
        <input
          value={this.state.inputValue}
          onChange={this.updateInput}
          type="text"
          name="name"
        />
        <input type="submit" onClick={this.handleSubmit} />
      </form>
    );
  }
}

export default Form;
