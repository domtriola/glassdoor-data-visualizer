import React from 'react';
import { Route } from 'react-router-dom';

import MenuContainer from './menu/menu_container';
import ChartContainer from './chart/chart_container';

const App = () => (
  <div>
    <MenuContainer />
    <ChartContainer />
  </div>
);

export default App;
