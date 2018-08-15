import React from 'react';
import { Link } from 'react-router-dom';

import ArtistThumbnail from './artist_thumbnail_container';
import TrackThumbnailList from './track_thumbnail_container';
import StreamTrackIndex from '../tracks/track_index_container';
import PlayerController from '../player_controller/player_controller_container';

const Stream = (props) => {
  const users = props.state.entities.users;
  const currentUser = props.state.session.currentUser;
  return (
    <div>
      <div className='content'>

        <div className='stream-content'>
          <div className='stream-nav-links'>
            <Link to='/stream'><h1>Stream</h1></Link>
          </div>

          <h2>Here are some recent tracks we think you would enjoy:</h2>

          <StreamTrackIndex />
        </div>

        <div className='stream-sidebar'>
          <div className='stream-sidebar-image'>
            <img src={window.images.streamSidebarPicture}></img>
          </div>

          <div className='sidebar-header' >
            <h3>Discover these artists</h3>

            <ArtistThumbnail />
          </div>

          <div className='sidebar-header' >
            <h3>Listen to these tracks</h3>

            <TrackThumbnailList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stream;
