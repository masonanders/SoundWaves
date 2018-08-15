import React from 'react';
import { Link } from 'react-router-dom';
import {Howl, Howler} from 'howler';

class PlayerController extends React.Component{
  constructor(props) {
    super(props);
    this.audio = {once: () => null, volume: () => null, fade: () => null};
    this.volume = 1.0;
    this.currentTrack = { id: null };
    this.playing = false;
  }

  newHowler() {
    this.audio = new Howl({
      src: this.getAudioSrc(),
      preload: true,
      loop: false,
    });
  }

  getAudioSrc() {
    if (this.currentTrack.audioUrl) {
      return [this.currentTrack.audioUrl];
    } else {
      return [window.audio.defaultAudio];
    }
  }

  play() {
    if (!this.playing) {
      this.playing = true;
      this.audio.play();
      this.audio.fade(0, this.volume, 300);
    }
  }

  pause() {
    const audio = this.audio;
    this.playing = false;
    audio.once( 'fade', () => { audio.pause( audio.id ); }, audio.id );
    audio.fade( audio.volume(), 0, 100, audio.id );
  }

  handlePlayButton() {
    const { play, pause, state } = this.props;
    const { playing, currentTrack } = this.props.state.ui.player;
    if (currentTrack === null) {
      return null;
    }
    playing ? pause() : play();
  }

  getTrack() {
    const { state } = this.props;
    const track = state.entities.tracks[state.ui.player.currentTrack];
    const artist = state.entities.users[track.artist_id];
    if (this.currentTrack.id !== track.id) {
      this.pause();
      this.currentTrack = track;
      this.newHowler();
    }
    return {track, artist };
  }

  _nullTrack() {
    return ({
      track: { title: '' },
      artist: { username: '' }
    });
  }

  render () {
    const { state } = this.props;

    const { track, artist } = this.props.state.ui.player.currentTrack ?
      this.getTrack() :
      this._nullTrack();

    const playing = this.props.state.ui.player.playing;
    const playButtonText = playing ? 'play pause' : 'play';
    playing ? this.play() : this.pause();

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
