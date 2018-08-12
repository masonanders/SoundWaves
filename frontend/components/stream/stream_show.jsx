import React from 'react';
import NavBar from '../nav_bar/nav_bar_container';

const Stream = (props) => {
  const users = props.state.entities.users;
  const currentUser = props.state.session.currentUser;
  return (
    <div>
      <NavBar />
      <div style={{height: '1000px'}}className='content'>
        <h1>Stream</h1>
        <h2>{`Greetings, ${users[currentUser].username}`}</h2>
        <button
          style={{color: 'black'},{backgroundColor: 'orange'}}
          onClick={() => props.endSession()}>Logout
        </button>
      </div>
    </div>
  );
};

export default Stream;
