import React from 'react';

const Stream = (props) => {
  return (
    <div className='content'>
      <h1>Stream</h1>
      <h2>Logged In</h2>
      <p>{JSON.stringify(props)}</p>
    </div>
  );
};

export default Stream;
