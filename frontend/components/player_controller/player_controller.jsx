import React from 'react';
import { Link } from 'react-router-dom';

class PlayerController extends React.Component{
  getTrack() {
    const { state } = this.props;
    const track = state.entities.tracks[state.ui.player.currentTrack];

    return {track, artist: state.entities.users[track.artist_id]};
  }

  _nullTrack() {
    return ({
      track: {title: ''},
      artist: ''
    });
  }

  render () {
    const { track, artist } = this.props.state.ui.player.currentTrack ?
      this.getTrack() :
      this._nullTrack();

    const playing = this.props.state.ui.player.playing;
    const playButtonText = playing ? 'play pause' : 'play';
    return (
      <div className='player-controller-container'>
        <div className='player-controlls' >
          <button className='back' />
          <button className={playButtonText} />
          <button className='forward' />
          <button className='shuffle' />
          <button className='repeat' />
        </div>

        <div className='player-progress'>
        </div>

        <div className='player-info'>
          <Link to={`/${artist}/${track.title}`} >
            <img src={window.images.defaultTrackIcon} />
          </Link>

          <div className='player-headers'>
            <Link to={`/${artist}`}>
              <p className='artist-header'>ARTIST{artist}</p>
            </Link>

            <Link to={`/${artist}/${track.title}`}>
              <p className='track-header'>TRACK{track.title}</p>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default PlayerController;
