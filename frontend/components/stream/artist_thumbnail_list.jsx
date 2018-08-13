import React from 'react';
import { Link } from 'react-router-dom';

class ArtistThumbnailList extends React.Component {
  componentWillMount() {
    this.props.fetchUserBy({ all: "" }, 3)
      .then(this.setState());
  }

  getUsersByIds() {
    const { state } = this.props;
    const { users } = state.entities;
    return state.search.users.map(id => users[id]);
  }

  userLi(user) {
    return (
    <li key={user.id} className='user-thumbnail'>
      <Link to={`/${user.username}`}>
        <img src={window.images.defaultUserIcon}></img>
         <h4>{user.username}</h4>
       </Link>
    </li>);
  }

  render () {
    this.getUsersByIds();
    const users = this.getUsersByIds().map(user => this.userLi(user));
    return (
      <div className='artist-thumbnail-list'>
        <ul>
          {users}
        </ul>
      </div>
    );
  }
}

export default ArtistThumbnailList;
