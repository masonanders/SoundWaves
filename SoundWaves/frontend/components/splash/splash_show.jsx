import React from 'react';
import App from '../app';

const Splash = (props) => {
  const loggedIn = props.state.session.loggedIn;
  if (loggedIn) {
    return (<App />);
  } else {
    return (
      <div>
        <h1>Splish Splash</h1>
        <h2>Logged Out</h2>
      </div>
    );
  }
};

export default Splash;
