
import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

// Views
import SignIn from './views/SignIn'
import SignUp from './views/SignUp'
import Dashboard from './views/Dashboard'
import { isAuthenticated } from 'services/auth'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{pathname: '/sign-in', state: {from: props.location}}} />
      )
    }
  />
)

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Redirect exact from="/" to="/sign-in" />
        <Route component={SignIn} exact path="/sign-in" />
        <Route component={SignUp} exact path="/sign-up" />
        <PrivateRoute component={Dashboard} exact path="/dashboard" />
        <Redirect to="/sign-in" />
      </Switch>
    );
  }
}
