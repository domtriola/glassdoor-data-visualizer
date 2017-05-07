import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';

import App from './app.jsx';

const Root = ({ store }) => {
  return (
    <Provider store={ store }>
      <HashRouter>
        <Route component={ App } />
      </HashRouter>
    </Provider>
  );
};

export default Root;
