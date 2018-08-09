import React from 'react';

const Stream = (props) => {
  const users = props.state.entities.users;
  const currentUser = props.state.session.currentUser;
  return (
    <div className='content'>
      <h1>Stream</h1>
      <h2>{`Greetings, ${users[currentUser].username}`}</h2>
      <button onClick={() => props.endSession()}>Logout</button>
    </div>
  );
};

export default Stream;
