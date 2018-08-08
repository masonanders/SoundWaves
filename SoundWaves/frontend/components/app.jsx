import React from 'react';
import { Route, Switch }  from 'react-router-dom';
import Splash from './splash/splash_container';
import Stream from './stream/stream_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = (props) => (
  <div>
    <h1>App</h1>
    <Switch>
      <AuthRoute exact path='/' component={Splash} />
      <ProtectedRoute exact path='/stream' component={Stream} />
    </Switch>
  </div>
);

export default App;
