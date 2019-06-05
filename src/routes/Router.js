import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import AuthenticatedRoute from "../components/authenticated-route";
// import UnauthenticatedRoute from "../components/unauthenticated-route";
import listPage from './ListPage';
import Notfound from './ui/Notfound';
import PrivateRoute from './PrivateRouter';
import requireAuth from './requireAuth';

export default () => (
  <Switch>
    {/* <Route
      exact
      path="/tai-khoan/:title--:id([0-9].*).html"
      component={listPage['ProfileGuest']}
    /> */}
    <Route
      render={function() {
        return <Notfound />;
      }}
    />{' '}
  </Switch>
);
