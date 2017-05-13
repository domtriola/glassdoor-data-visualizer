import React from 'react';

import FixedMenuContainer from './fixed_menu_container';
import DynamicMenu from './dynamic_menu.jsx';

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.renderMenu = this.renderMenu.bind(this);
  }

  renderMenu() {
    if (this.props.displayType === "fixed")
      return <FixedMenuContainer />;
    else
      return <DynamicMenu />;
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
