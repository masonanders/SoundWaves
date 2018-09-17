import React from "react";
import { Link } from "react-router-dom";
import { randomNumber } from "../../util/tools";

const TrackThumbnailItem = props => {
  const { track, users } = props;

  return (
    <li key={track.id} className="track-thumbnail">
      <Link to={`/${users[track.artist_id].username}/${track.title}`}>
        <img src={window.images.trackImages[track.imageId]} />
        <h3>{users[track.artist_id].username}</h3>
        <h4>{track.title}</h4>
      </Link>
    </li>
  );
};

export default TrackThumbnailItem;
