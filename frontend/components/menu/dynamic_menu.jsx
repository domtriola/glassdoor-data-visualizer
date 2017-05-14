import React from 'react';

class DynamicMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = { searchQuery: this.props.searchQuery };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.preventDefault();

    this.setState({ searchQuery: e.target.value.toLowerCase() });
  }

  handleSubmit() {
    this.props.updateSearchQuery(this.state.searchQuery);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={e => this.handleChange(e)}
          value={this.state.searchQuery} />
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default DynamicMenu;
