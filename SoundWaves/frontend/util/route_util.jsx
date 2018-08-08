import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


const Auth = ({ component: Component, path, exact, loggedIn }) => {
  const render = (props) => {
    if (loggedIn) {
      return (<Redirect to='/stream' />);
    } else {
      return (<Component {...props} />);
    }
  };

  return (
    <Route exact={exact} path={path} render={render} />
  );
};

const Protected = ({ component: Component, path, exact, loggedIn }) => {
  const render = (props) => {
    if (loggedIn) {
      return (<Component {...props} />);
    } else {
      return (<Redirect to='/' />);
    }
  };

  return (
    <Route exact={exact} path={path} render={render} />
  );
};

const mapStateToProps = state => ({
  loggedIn: state.session.loggedIn
});

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
