import React from "react";
import ErrorIndicator from "../arror-indicator/ErrorIndicator";

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
  };
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({ hasError: true });
  }
  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
