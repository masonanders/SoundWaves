import React from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

const Auth = ({ component: Component, path, exact, loggedIn }) => {
  const render = props => {
    return loggedIn ? <Redirect to="/stream" /> : <Component {...props} />;
  };

  return <Route exact={exact} path={path} render={render} />;
};

const Protected = ({ component: Component, path, exact, loggedIn }) => {
  const render = props => {
    return loggedIn ? <Component {...props} /> : <Redirect to="/" />;
  };

  return <Route exact={exact} path={path} render={render} />;
};

const mapStateToProps = ({ session }) => ({
  loggedIn: session.loggedIn
});

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
