import React from 'react';
import { Link } from 'react-router-dom';

import NavBar from '../nav_bar/nav_bar_container';

const Stream = (props) => {
  const users = props.state.entities.users;
  const currentUser = props.state.session.currentUser;
  return (
    <div>
      <NavBar />
      <div style={{height: '1000px'}}className='content'>

        <div className='stream-content'>
          <div className='stream-nav-links'>
            <Link to='/stream'><h1>Stream</h1></Link>
          </div>

          <h2>Here are some recent tracks we think you would enjoy:</h2>
        </div>
      </div>
    </div>
  );
};

export default Stream;
