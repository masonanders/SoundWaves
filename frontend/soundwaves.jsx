import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';


// TODO Remove following after development!
import * as UserActions from './actions/user_actions';
import * as SessionActions from './actions/session_actions';
import * as SessionModalActions from './actions/session_modal_actions';
import * as TrackActions from './actions/track_actions';

document.addEventListener('DOMContentLoaded', () => {
  let preState = {};
  if (window.currentUser) {
    preState = {
      session: { currentUser: window.currentUser.id, loggedIn: true },
      entities: { users: { [window.currentUser.id]: window.currentUser } }
    };
  }
  const store = configureStore(preState);
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);

  // TODO Remove following after development!
  window.store = store;
  window.state = () => store.getState();
  window.userActions = UserActions;
  window.sessionActions = SessionActions;
  window.sessionModalActions = SessionModalActions;
  window.trackActions = TrackActions;
});
