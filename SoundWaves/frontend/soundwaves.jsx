import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';


// TODO Remove following after development!
import * as UserActions from './actions/user_actions';
import * as SessionActions from './actions/session_actions';
import * as SessionModalActions from './actions/session_modal_actions';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);

  // TODO Remove following after development!
  window.store = store;
  window.state = () => store.getState();
  window.userActions = UserActions;
  window.sessionActions = SessionActions;
  window.sessionModalActions = SessionModalActions;
});
