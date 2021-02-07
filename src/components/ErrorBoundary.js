import React, { Component } from "react";
import "./ErrorBoundary.css";

class ErrorBoundary extends Component {
  constructor() {
    super();

    this.state = {
      hasError: false
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    return (
      <div className="pa3">
        {this.state.hasError ? (
          <h2 className="f3 error-text">An error occurred</h2>
        ) : (
          this.props.children
        )}
      </div>
    );
  }
}

export default ErrorBoundary;
