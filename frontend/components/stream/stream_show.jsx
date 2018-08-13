import React from 'react';
import { Link } from 'react-router-dom';
import ArtistThumbnail from './artist_thumbnail_container';

import NavBar from '../nav_bar/nav_bar_container';

const Stream = (props) => {
  const users = props.state.entities.users;
  const currentUser = props.state.session.currentUser;
  return (
    <div>
      <NavBar />
      <div style={{height: '10000px'}}className='content'>

        <div className='stream-content'>
          <div className='stream-nav-links'>
            <Link to='/stream'><h1>Stream</h1></Link>
          </div>

          <h2>Here are some recent tracks we think you would enjoy:</h2>
        </div>

        <div className='stream-sidebar'>
          <div className='stream-sidebar-image'>
            <img src="/assets/you-are-what-you-listen-to.jpg"></img> {/*Photo by Mohammad Metri on Unsplash*/}
              {/*"<%= asset_path('you-are-what-you-listen-to.jpg') %>"*/}
          </div>

          <div className='sidebar-header' >
            <h3>Discover these artists</h3>

            <ArtistThumbnail />
          </div>

          <div className='sidebar-header' >
            <h3>Listen to these tracks</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stream;
