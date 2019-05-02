// =================================
// Error Catching Component
// =================================

import React from 'react';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
    };
  }
  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({
      error: true,
    });
    // Log the error to the console
    console.log(error, info);
  }
  render() {
    if (this.state.error) {
      return <div>Something went wrong, please wait and try again.</div>;
    }
    return this.props.children;
  }
}
