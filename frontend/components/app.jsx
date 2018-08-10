import React from 'react';
import { Route, Switch, Redirect }  from 'react-router-dom';
import Splash from './splash/splash_container';
import Stream from './stream/stream_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = ({ store }) => (
  <div id='app'>
    <Switch>
      <AuthRoute exact path='/' component={ Splash } />
      <ProtectedRoute exact path='/stream' component={ Stream } />
      { store.getState().session.loggedIn ?
          <Redirect to='/stream' />
        :
          <Redirect to='/' />
      }
    </Switch>
  </div>
);

export default App;
