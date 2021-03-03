import React, { Component } from "react";

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  }

  render() {
    const { counter } = this.state;
    if (counter === 3) {
      throw new Error("Somthing went wrong!!!!!!!!!");
    }
    return <h1 onClick={this.handleClick}>{counter}</h1>;
  }
}
