import React from 'react';

const Splash = (props) => {
  return (
    <div>
      <h1>Splish Splash</h1>
      <h2>Logged Out</h2>
      <p>{JSON.stringify(props)}</p>
    </div>
  );
};

export default Splash;
