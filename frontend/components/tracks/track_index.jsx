import React from 'react';
import { Link } from 'react-router-dom';

import TrackIndexItem from './track_index_item';

class TrackIndex extends React.Component {
  componentWillMount() {
    this.props.fetchTracksBy({ all: '' }, 7)
      .then(this.setState());
  }

  getTracksByIds() {
    const { state } = this.props;
    const { tracks } = state.entities;
    return Object.keys(tracks).map(id => tracks[id]);
  }

  render () {
    const { state } = this.props;
    const tracks = this.getTracksByIds().map(
      track => <TrackIndexItem
      key={track.id}
      track={track}
      state={state}
      functions={{
        play: this.props.play,
        pause: this.props.pause,
        playNew: this.props.playNew
      }}/>
    );

    return (
      <div className='track-index'>
        <ul className='track-list'>
          {tracks}
        </ul>
      </div>
    );
  }
}

export default TrackIndex;
