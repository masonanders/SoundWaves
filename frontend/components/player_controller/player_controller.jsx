import React from 'react';
import { Link } from 'react-router-dom';

class PlayerController extends React.Component{

  handlePlayButton() {
    const { play, pause, state } = this.props;
    const { playing, currentTrack } = state.ui.player;
    if (currentTrack === null) {
      return null;
    }
    playing ? pause() : play();
  }

  getTrack() {
    const { state } = this.props;
    const track = state.entities.tracks[state.ui.player.currentTrack];
    const artist = state.entities.users[track.artist_id];

    return {track, artist };
  }

  _nullTrack() {
    return ({
      track: { title: '' },
      artist: { username: '' }
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
          <button
            className={playButtonText}
            onClick={() => this.handlePlayButton()}/>
          <button className='forward' />
          <button className='shuffle' />
          <button className='repeat' />
        </div>

        <div className='player-progress'>
        </div>

        <div className='player-info'>
          <Link to={`/${artist.username}/${track.title}`} >
            <img src={window.images.defaultTrackIcon} />
          </Link>

          <div className='player-headers'>
            <Link to={`/${artist.username}`}>
              <p className='artist-header'>{artist.username}</p>
            </Link>

            <Link to={`/${artist.username}/${track.title}`}>
              <p className='track-header'>{track.title}</p>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default PlayerController;
