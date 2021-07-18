import React from 'react';
import { Route } from 'react-router-dom';

import Home from './components/Home';

const Routes = () => {
  return (
    <>
      <Route exact path="/">
        <Home />
      </Route>
    </>
  );
};

export default Routes;
