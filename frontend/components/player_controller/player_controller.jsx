import React from "react";
import { Link } from "react-router-dom";
import { Howl, Howler } from "howler";

// TODO indicate loading somehow

class PlayerController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loop: false,
      shuffle: false,
      duration: "0:00",
      progress: "0:00"
    };
    this.audio = {
      once: () => null,
      volume: () => null,
      fade: () => null,
      duration: () => null,
      seek: () => null,
      state: () => null,
      playing: () => false
    };
    this.volume = 1.0;
    this.currentTrack = { id: null };
    this.playing = this.props.state.ui.player.playing;
  }

  newHowler() {
    this.audio = new Howl({
      src: this.getAudioSrc(),
      preload: true,
      html5: true,
      onpause: () => clearInterval(this.time),
      onplay: () => {
        this.setState({
          duration: this.durationToString(this.audio.duration())
        });
        this.time = setInterval(() => {
          this.setState({ progress: this.durationToString(this.audio.seek()) });
        }, 1000);
      },
      onend: () => {
        this.pause();
        this.handleNextSong();
      }
    });
  }

  handleNextSong(string) {
    this.pause();
    const tracks = Object.keys(this.props.state.entities.tracks).reverse();
    const trackIdx = this.getSongIndex(this.currentTrack.id, tracks);
    let nextTrack = trackIdx;
    switch (string) {
      case "next":
        if (this.state.shuffle) {
          nextTrack = Math.floor(Math.floor(tracks.length - 1) * Math.random());
        } else {
          nextTrack += 1;
        }
        break;
      case "prev":
        if (this.audio.seek() < 5 && nextTrack > 0) {
          nextTrack -= 1;
        }
        break;
      default:
        if (this.state.loop) {
          null;
        } else if (this.state.shuffle) {
          while (nextTrack === trackIdx && tracks.length > 1) {
            nextTrack = Math.floor(
              Math.floor(tracks.length - 1) * Math.random()
            );
          }
        } else {
          nextTrack += 1;
        }
    }
    if (nextTrack >= tracks.length || nextTrack < 0) {
      this.audio.stop();
      this.stop();
    } else {
      this.currentTrack = this.props.state.entities.tracks[tracks[nextTrack]];
      this.newHowler();
      this.props.playNew(this.currentTrack);
      this.play();
    }
  }

  getSongIndex(id, arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === id.toString()) {
        return i;
      }
    }
    return null;
  }

  durationToString(duration) {
    let seconds = Math.floor(duration % 60);
    let minutes = Math.floor(duration / 60);
    let hours = 0;
    if (minutes > 60) {
      hours = Math.floor(minutes / 60);
      minutes = Math.floor(minutes % 60);
    }
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    minutes = minutes < 10 ? (hours > 0 ? `0${minutes}` : minutes) : minutes;
    hours = hours > 0 ? `${hours}:` : "";
    if (isNaN(seconds)) {
      return "-:-";
    } else {
      return `${hours}${minutes}:${seconds}`;
    }
  }

  calculateProgress() {
    const percent = (this.audio.seek() / this.audio.duration()) * 100;
    return `${percent}%`;
  }

  getAudioSrc() {
    if (this.currentTrack.audioUrl) {
      return [this.currentTrack.audioUrl];
    } else {
      return [window.audio.defaultAudio];
    }
  }

  play() {
    if (!this.audio.playing()) {
      this.playing = true;
      this.audio.play();
      this.audio.fade(0, this.volume, 300);
    }
  }

  pause() {
    const audio = this.audio;
    this.playing = false;
    audio.once(
      "fade",
      () => {
        audio.pause(audio.id);
      },
      audio.id
    );
    audio.fade(audio.volume(), 0, 100, audio.id);
  }

  stop() {
    const audio = this.audio;
    audio.stop();
    this.playing = false;
    this.props.stop();
    this.currentTrack = { id: null };
    this.audio = {
      once: () => null,
      volume: () => null,
      fade: () => null,
      duration: () => 0,
      seek: () => 0,
      state: () => null
    };
    this.setState({ duration: "0:00", progress: "0:00" });
  }

  toggle(button) {
    this.setState({ [button]: Boolean(!this.state[button]) });
  }

  status(name) {
    switch (name) {
      case "loop":
        return this.state.loop ? "repeat on" : "repeat";
      case "shuffle":
        return this.state.shuffle ? "shuffle on" : "shuffle";
      default:
        null;
    }
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
    } else {
      this.currentTrack = track;
    }
    return { track, artist };
  }

  _nullTrack() {
    return {
      track: { title: "" },
      artist: { username: "" }
    };
  }

  render() {
    const { state } = this.props;

    const { track, artist } = this.props.state.ui.player.currentTrack
      ? this.getTrack()
      : this._nullTrack();

    const hideLinks = this.props.state.ui.player.currentTrack
      ? null
      : { visibility: "hidden" };
    const playing = this.props.state.ui.player.playing;
    const playButtonText = playing ? "play pause" : "play";
    playing ? this.play() : this.pause();

    return (
      <div className="player-controller-container">
        <div className="player-controlls">
          <button
            disabled={
              this.audio.state() === "loading" || this.audio.state() === null
            }
            onClick={() => this.handleNextSong("prev")}
            className="back"
          />
          <button
            disabled={
              this.audio.state() === "loading" || this.audio.state() === null
            }
            className={playButtonText}
            onClick={() => this.handlePlayButton()}
          />
          <button
            disabled={
              this.audio.state() === "loading" || this.audio.state() === null
            }
            onClick={() => this.handleNextSong("next")}
            className="forward"
          />
          <button
            disabled={this.audio.state() === "loading"}
            onClick={() => this.toggle("shuffle")}
            className={this.status("shuffle")}
          />
          <button
            disabled={this.audio.state() === "loading"}
            onClick={() => this.toggle("loop")}
            className={this.status("loop")}
          />
        </div>

        <p className="progress">{this.state.progress}</p>
        <div className="player-progress">
          <div
            style={{ width: this.calculateProgress() }}
            className="progress-line"
          />
        </div>
        <p className="duration">{this.state.duration}</p>

        <div className="player-info">
          <Link style={hideLinks} to={`/${artist.username}/${track.title}`}>
            <img src={window.images.trackImages[track.imageId]} />
          </Link>

          <div className="player-headers">
            <Link style={hideLinks} to={`/${artist.username}`}>
              <p className="artist-header">{artist.username}</p>
            </Link>

            <Link style={hideLinks} to={`/${artist.username}/${track.title}`}>
              <p className="track-header">{track.title}</p>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default PlayerController;
