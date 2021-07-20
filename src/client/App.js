import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';

import store from './redux/store';
import Routes from './Routes';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>{renderRoutes(Routes)}</div>
      </Router>
    </Provider>
  );
};

export default App;
