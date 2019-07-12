
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Views
import SignIn from './views/SignIn';
import SignUp from './views/SignUp';
import Dashboard from './views/Dashboard';

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Redirect
          exact
          from="/"
          to="/sign-in"
        />
        <Route
          component={SignIn}
          exact
          path="/sign-in"
        />
        <Route
          component={SignUp}
          exact
          path="/sign-up"
        />
        <Route
          component={Dashboard}
          exact
          path="/dashboard"
        />
        <Redirect to="/sign-in" />
      </Switch>
    );
  }
}
