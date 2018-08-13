import React from 'react';
import { Link } from 'react-router-dom';

class TrackThumbnailList extends React.Component {
  componentWillMount() {
    this.props.fetchTracksBy({ all: "" }, 3)
      .then(this.setState());
  }

  getTracksByIds() {
    const { state } = this.props;
    const { tracks } = state.entities;
    return state.search.tracks.slice(0, 3).map(id => tracks[id]);
  }

  trackLi(track) {
    const { users } = this.props.state.entities;
    return (
      <li key={track.id} className='track-thumbnail'>
        <Link to={`/artist_name/${track.title}`}>
          <img src={"/assets/default-track-icon"}></img> {/* Photo by Namroud Gorguis on Unsplash */}
            <h3>{users[track.artist_id].username}</h3>
            <h4>{track.title}</h4>
         </Link>
      </li>
    );
  }

  render () {
    this.getTracksByIds();
    const tracks = this.getTracksByIds().map(track => this.trackLi(track));
    return (
      <div className='track-thumbnail-list'>
        <ul>
          {tracks}
        </ul>
      </div>
    );
  }
}

export default TrackThumbnailList;
