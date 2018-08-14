import React from 'react';
import { Route, Switch, Redirect }  from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Splash from './splash/splash_container';
import Stream from './stream/stream_container';
import TrackShow from './tracks/track_show_container';

const App = ({ store }) => (
  <div id='app'>
    <Switch>
      <AuthRoute exact path='/' component={ Splash } />
      <ProtectedRoute exact path='/stream' component={ Stream } />
      <ProtectedRoute exact path='/:artist/:title' component={ TrackShow } />
      { store.getState().session.loggedIn ?
          <Redirect to='/stream' />
        :
          <Redirect to='/' />
      }
    </Switch>
  </div>
);

export default App;
