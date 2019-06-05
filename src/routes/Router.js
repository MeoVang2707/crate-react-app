import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import AuthenticatedRoute from "../components/authenticated-route";
import Notfound from 'ui/pages/NotFound';

import listPage from './ListPage';
import PrivateRoute from './PrivateRouter';
// import requireAuth from './requireAuth';

export default () => (
  <Switch>
    <Route exact path="/" component={listPage.Home} />
    {/* <Route
      exact
      path="/tai-khoan/:title--:id([0-9].*).html"
      component={listPage['ProfileGuest']}
    /> */}
    <Route render={() => <Notfound />} />
  </Switch>
);
