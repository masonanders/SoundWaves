import React from 'react';
import { Link } from 'react-router-dom';

class TrackIndexItem extends React.Component {
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

  render() {
    const { track, state } = this.props;
    const { player } = state.ui;
    const artist = state.entities.users[track.artist_id].username;
    const currentTrack = player.currentTrack === track.id ? true : false;
    const playButtonState = currentTrack && player.playing ?
      'play-button pause' :
      'play-button';
    return (
      <li key={track.title} className='track-item'>
        <h2 className='track-header'>
          <Link to={`/${artist}`}>
            <img src={"/assets/default-user-icon"} />
            <h4>{artist}</h4>
          </Link> posted this
        </h2>

        <div className='track-body'>
          <Link to={`/${artist}/${track.title}`}>
            <img src={"/assets/default-track-index-artwork"}></img> {/* Photo by Wes Hicks on Unsplash */}
          </Link>

          <div className='track-content'>
            <button className={playButtonState} onClick={() => this.handlePlayButton()} />
            <div className='track-info'>
              <Link to={`/${artist}`}>
                <h3>{artist}</h3>
              </Link>

              <Link to={`/${artist}/${track.title}`}>
                <h4>{track.title}</h4>
              </Link>
            </div>
          </div>
        </div>

      </li>
    );
  }
}

export default TrackIndexItem;
