import React from 'react';

class TrackBanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color1: `rgb(${this.randNum()},${this.randNum()},${this.randNum()})`,
      color2: `rgb(${this.randNum()},${this.randNum()},${this.randNum()})`,
    };
  }

  handlePlayButton() {
    const track = this.props.track;
    const { play, pause, playNew } = this.props.functions;
    const { playing, currentTrack } = this.props.state.ui.player;
    if (currentTrack === track.id) {
      playing ? pause() : play();
    } else {
      playNew(track);
    }
  }

  randNum() {
    return Math.floor(Math.floor(255) * Math.random()).toString();
  }

  render() {
    const { state } = this.props;
    const { player } = state.ui;
    const { track, artist } = this.props.track ? this.props : { track: { title: '', id: null }, artist: { username: '' } };
    const currentTrack = player.currentTrack === track.id ? true : false;
    const playButtonState = currentTrack && player.playing ?
      'pause' :
      '';

    return (
      <div
        className='track-banner'
        style={
          { background: `linear-gradient(to left,
            ${this.state.color1},
            ${this.state.color2})`
      }}>
        <div className='track-present'>
          <div className='track-controls'>
            <button
              className={playButtonState}
              onClick={ () => this.handlePlayButton() }/>
            <div className='track-header'>
              <h3>{artist.username}</h3>
              <h2>{track.title}</h2>
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
  }
}

export default TrackBanner;
