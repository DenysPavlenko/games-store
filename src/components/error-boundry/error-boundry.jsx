import React, { Component } from 'react';
// Components
import ErrorIndicator from 'components/error-indicator/error-indicator';

class ErrorBoudry extends Component {
  state = {
    hasError: false
  }
  componentDidCatch() {
    this.setState({ hasError: true })
  }
  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) return <ErrorIndicator />

    return children;
  }
}

export default ErrorBoudry;
