import React from "react";
import { Link } from "react-router-dom";

class TrackThumbnailList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tracks: [] };
  }
  componentWillMount() {
    this.props
      .fetchTracksBy({ all: "" }, 3)
      .then(res => this.setState({ tracks: res.tracks }));
  }

  getTracksByIds() {
    const { state } = this.props;
    const { tracks } = state.entities;
    return state.search.tracks.slice(0, 3).map(id => tracks[id]);
  }

  trackLi(track) {
    const { users } = this.props.state.entities;
    return (
      <li key={track.id} className="track-thumbnail">
        <Link to={`/${users[track.artist_id].username}/${track.title}`}>
          <img src={window.images.defaultTrackIcon} />
          <h3>{users[track.artist_id].username}</h3>
          <h4>{track.title}</h4>
        </Link>
      </li>
    );
  }

  render() {
    const tracks = this.state.tracks.map(track => this.trackLi(track));
    return (
      <div className="track-thumbnail-list">
        <ul>{tracks}</ul>
      </div>
    );
  }
}

export default TrackThumbnailList;
