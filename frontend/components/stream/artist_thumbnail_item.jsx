import React from "react";
import { Link } from "react-router-dom";

const ArtistThumbnailItem = props => {
  const { user } = props;

  return (
    <li key={user.id} className="user-thumbnail">
      <Link to={`/${user.username}`}>
        <img src={window.images.userIcons[user.imageId]} />
        <h4>{user.username}</h4>
      </Link>
    </li>
  );
};

export default ArtistThumbnailItem;
