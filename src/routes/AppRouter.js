import React from 'react';

import HelpPage from '../components/Help';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/Dashboard';
import NotFoundPage from '../components/NotFound';
import Login from '../components/Login';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={Login} exact={true} />
        <PrivateRoute
          path="/dashboard"
          component={DashboardPage}
          exact={true}
        />

        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
