import { Component } from "react";

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const prevCount = this.state.counter;
    this.setState({ counter: prevCount + 1 });
  }

  render() {
    if (this.state.counter === 3) {
      throw new Error("Somthing went wrong!!!!!!!!!");
    }
    return <h1 onClick={this.handleClick}>{this.state.counter}</h1>;
  }
}
