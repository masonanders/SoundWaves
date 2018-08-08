import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

// TODO Remove following after development!
import * as UserActions from './actions/user_actions';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<h2>SoundWaves</h2>, root);

  // TODO Remove following after development!
  window.store = store;
  window.state = () => store.getState();
  window.userActions = UserActions;
});
