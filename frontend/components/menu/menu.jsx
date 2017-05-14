import React from 'react';

import DynamicMenuContainer from './dynamic_menu_container';
import FixedMenu from './fixed_menu.jsx';

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.renderMenu = this.renderMenu.bind(this);
  }

  renderMenu() {
    if (this.props.displayType === "fixed")
      return <FixedMenu />;
    else
      return <DynamicMenuContainer />;
  }

  render() {
    return (
      <div id="menu">
        <select
          onChange={e => this.props.updateDisplayType(e.target.value)} >
          <option>fixed</option>
          <option>dynamic</option>
        </select>

        {this.renderMenu()}
      </div>
    );
  }
}

export default Menu;
