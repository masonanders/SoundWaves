import React from "react";
import { Link } from "react-router-dom";

import TrackIndexItem from "./track_index_item";

class TrackIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tracks: [] };
  }
  componentWillMount() {
    this.props
      .fetchTracksBy({ all: "" }, 10)
      .then(res => this.setState({ tracks: res.tracks }));
  }

  getTracksByIds() {
    const { state } = this.props;
    const { tracks } = state.entities;
    return Object.keys(tracks).map(id => tracks[id]);
  }

  toggleVisibility(e) {
    const visibility =
      e.path[0].className === "nav-searchbar-container" ||
        e.path[1].className === "nav-searchbar-container" ||
        e.path[0].className === "nav-search-no-results" ||
        e.path[1].className === "nav-search-no-results"
        ? "visible"
        : "hidden";
    if (this.state.visibility !== visibility) {
      this.setState({ visibility });
    }
  }
  
  render() {
    const { state } = this.props;
    const tracks = this.state.tracks.map(track => (
      <TrackIndexItem
        key={track.id}
        track={track}
        state={state}
        functions={{
          play: this.props.play,
          pause: this.props.pause,
          playNew: this.props.playNew
        }}
      />
    ));

    return (
      <div className="track-index">
        <ul className="track-list">{tracks.reverse()}</ul>
        <div className="track-index-footer" />
      </div>
    );
  }
}

export default TrackIndex;
