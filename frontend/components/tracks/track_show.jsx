import React from 'react';

import TrackBanner from './track_show_banner';

const TrackShow = () => {
  return(
    <div>
      <div style={{height: '800px'}} className='content'>
        <TrackBanner />

        <div className='track-body'>
          <div className='track-content'>
          </div>

          <div className='track-sidebar'>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackShow;
