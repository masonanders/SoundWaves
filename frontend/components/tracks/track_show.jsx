import React from 'react';

import NavBar from '../nav_bar/nav_bar_container';
import PlayBar from '../player_controller/player_controller_container';
import TrackBanner from './track_show_banner';

const TrackShow = () => {
  return(
    <div>
      <NavBar />
      <div style={{height: '800px'}} className='content'>
        <TrackBanner />
        
        <div className='track-body'>
          <div className='track-content'>
          </div>

          <div className='track-sidebar'>
          </div>
        </div>
      </div>
      <PlayBar />
    </div>
  );
};

export default TrackShow;
