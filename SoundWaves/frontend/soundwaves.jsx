import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<h2>SoundWaves</h2>, root);

  // TODO Remove following after development!
  window.state = store.getState();
});
