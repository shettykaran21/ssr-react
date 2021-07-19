import React from 'react';
import { Route } from 'react-router-dom';

import Home from './components/Home';
import UsersList from './components/UsersList';

const Routes = () => {
  return (
    <>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/users">
        <UsersList />
      </Route>
    </>
  );
};

export default Routes;
