import React from 'react';
import { Route, Switch, Redirect }  from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavBar from './nav_bar/nav_bar_container';
import Splash from './splash/splash_container';
import Stream from './stream/stream_container';
import Upload from './upload/upload_container';
import TrackShow from './tracks/track_show_container';
import UserShow from './users/user_show_container';
import PlayerController from './player_controller/player_controller_container';

const App = ({ store }) => (
  <div id='app'>

    {store.getState().session.loggedIn ? <NavBar /> : null}

      <Switch>
        <AuthRoute exact path='/' component={ Splash } />
        <ProtectedRoute exact path='/upload' component={ Upload } />
        <ProtectedRoute exact path='/stream' component={ Stream } />
        <ProtectedRoute exact path='/:artist/:title' component={ TrackShow } />
        <ProtectedRoute exact path='/:user' component={ UserShow } />
        { store.getState().session.loggedIn ?
            <Redirect to='/stream' />
          :
            <Redirect to='/' />
        }
      </Switch>

    {store.getState().session.loggedIn ? <PlayerController /> : null}
  </div>
);

export default App;
