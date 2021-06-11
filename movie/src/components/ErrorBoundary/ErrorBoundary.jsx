import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    this.setState({ hasError: true });
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return <h1>Что-то пошло не так.</h1>;
    }

    return children;
  }
}

ErrorBoundary.propTypes = {
  children: React.propTypes.element.isRequired,
};
