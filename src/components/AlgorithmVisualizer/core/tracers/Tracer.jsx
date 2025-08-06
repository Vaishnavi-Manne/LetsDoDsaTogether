import React from 'react';

class Tracer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      options: {}
    };
  }

  setData(data) {
    this.setState({ data });
  }

  setOptions(options) {
    this.setState({ options });
  }

  render() {
    return null; // Base tracer doesn't render anything
  }
}

export default Tracer;
