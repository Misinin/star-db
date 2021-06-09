import React from "react";

class ErrorBoundry extends React.Component {
  state = {
    hasError: false,
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <div>ERROR INDICATOR</div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundry
