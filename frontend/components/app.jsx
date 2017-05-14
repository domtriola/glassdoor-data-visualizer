import React from 'react';
import { Route } from 'react-router-dom';

import MenuContainer from './menu/menu_container';
import ChartContainer from './chart/chart_container';

import Footer from './footer/footer';

const App = () => (
  <div>
    <MenuContainer />
    <ChartContainer />
    <Footer />
  </div>
);

export default App;
