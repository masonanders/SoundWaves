import React from "react";
import ArtistThumbnailItem from "./artist_thumbnail_item";

class ArtistThumbnailList extends React.Component {
  componentWillMount() {
    this.props.fetchUserBy({ all: "" }, 3).then(this.setState());
  }

  getUsersByIds() {
    const { state } = this.props;
    const { users } = state.entities;
    return state.search.users.map(id => users[id]);
  }

  render() {
    this.getUsersByIds();
    const users = this.getUsersByIds().map(user => (
      <ArtistThumbnailItem key={user.id} user={user} />
    ));
    return (
      <div className="artist-thumbnail-list">
        <ul>{users}</ul>
      </div>
    );
  }
}

export default ArtistThumbnailList;
