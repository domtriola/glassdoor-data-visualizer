import React from 'react';
import { esc } from '../../util/sanitize';

class DynamicMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = { searchQuery: this.props.searchQuery };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.preventDefault();

    this.setState({ searchQuery: esc(e.target.value.toLowerCase()) });
  }

  handleSubmit() {
    this.props.updateSearchQuery(this.state.searchQuery);
    this.props.fetchData({
      url: `/api/state-quantities?q=${this.state.searchQuery}&fromAge=10`
    });
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
