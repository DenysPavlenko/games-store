import React, { Component } from 'react';

class ErrorBoudry extends Component {
	state = {
		hasError: false
	}
	componentDidCatch() {
		this.setState({ hasError: true })
	}
	render() {
		if (this.state.hasError) return <p>ERROR</p>

		return this.props.children;
	}
}

export default ErrorBoudry;