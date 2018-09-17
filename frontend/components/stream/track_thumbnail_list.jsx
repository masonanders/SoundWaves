import React from "react";
import { Link } from "react-router-dom";
import { randomNumber } from "../../util/tools";
import TrackThumbnailItem from "./track_thumbnail_item";

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

  render() {
    const tracks = this.state.tracks.map(track => (
      <TrackThumbnailItem
        key={track.id}
        track={track}
        users={this.props.state.entities.users}
      />
    ));
    return (
      <div className="track-thumbnail-list">
        <ul>{tracks}</ul>
      </div>
    );
  }
}

export default TrackThumbnailList;
