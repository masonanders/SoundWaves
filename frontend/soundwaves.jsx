import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

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

});
