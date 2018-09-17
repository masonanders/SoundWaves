import React from "react";

import TrackIndexItem from "../tracks/track_index_item";

const UserIndex = props => {
  const { state } = props;
  const tracks = props.tracks.map(track => (
    <TrackIndexItem
      usersIndex={true}
      key={track.id}
      track={track}
      state={state}
      functions={{
        play: props.play,
        pause: props.pause,
        playNew: props.playNew
      }}
    />
  ));

  return (
    <div className="track-index">
      <ul className="track-list">
        {tracks.sort((a, b) => b.props.track.id - a.props.track.id)}
      </ul>
      <div className="track-index-footer" />
    </div>
  );
};

export default UserIndex;
