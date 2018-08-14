import React from 'react';

const TrackBanner = () => {
  // TODO save color to state in constructor so it doesn't change on rerender
  // TODO make play button toggle and sync with playbar
  // TODO track and artist names instead of placeholders
  const randNum = () => Math.floor(Math.floor(255) * Math.random()).toString();
  return (
    <div
      className='track-banner'
      style={
        { background: `linear-gradient(to left,
          rgb(${randNum()},${randNum()},${randNum()}),
          rgb(${randNum()},${randNum()},${randNum()}))`
    }}>
      <div className='track-present'>
        <div className='track-controls'>
          <button className=''/>
          <div className='track-header'>
            <h3>{'track artist'}</h3>
            <h2>{'this is the track title'}</h2>
          </div>
        </div>

        <div className='waveform'>
        </div>
      </div>

      <div className='track-artwork'>
        <img src={window.images.defaultTrackArtwork}/>
      </div>
    </div>
  );
};

export default TrackBanner;
