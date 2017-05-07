import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Glassdoor Data Visualizer</h1>
        <p>{this.props.query}</p>
      </div>
    );
  }
}

export default Header;
