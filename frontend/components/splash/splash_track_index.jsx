import React, { Component } from "react";

class TrackIndex extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [], tracks: [] };
  }

  componentWillMount() {
    this.props.fetchTrackBy({ all: "all" }, 12).then(res => {
      this.setState({ users: res.users, tracks: res.tracks });
    });
  }

  makeTrackItems() {
    const tracks = Object.values(this.state.tracks).map(track => {
      return {
        track,
        user: Object.values(this.state.users).filter(
          user => user.id === track.artist_id
        )[0]
      };
    });

    return tracks.map(trackObj => {
      const { track, user } = trackObj;
      return (
        <div key={track.id} className="splash-track-thumbnail">
          <img src={window.images.trackImages[track.imageId]} />
          <h3>{track.title}</h3>
          <h4>{user.username}</h4>
        </div>
      );
    });
  }

  render() {
    const tracks = this.makeTrackItems();

    return (
      <div className="splash-track-index">
        <header>
          <h1>Listen to these tracks and more</h1>
        </header>
        <section>{tracks}</section>
      </div>
    );
  }
}

export default TrackIndex;
