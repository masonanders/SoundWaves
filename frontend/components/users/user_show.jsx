import React from 'react';

class UserShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: { username: '' }
    };
  }

  componentDidMount() {
    this.props.fetchUserBy({ username: this.props.username })
      .then(res => this.setState({
        user: res.users[0]
      }))
      .then(() => this.props.fetchTrackBy({ artist_id: this.state.user.id }))
      .then(res => this.setState({
        tracks: res.tracks
      }));
  }

  render() {
    console.log('user', this.state.user);
    console.log('tracks', this.state.tracks);
    return (
      <div className='content'>
        <div className='user-content'>
          <div className='user-banner'>
            <img src={window.images.defaultUserIcon} />
            <div className='banner-user-info'>
              <h2>{this.state.user.username}</h2>
            </div>
          </div>

          <div className='user-body-header'>
            <div className='user-headers'>
              <h2>Tracks</h2>
            </div>

            <div className='user-buttons'>
            </div>
          </div>

          <div className='user-body'>
            <div className='user-track-index'>
              <h1>Track Index</h1>
            </div>

            <div className='user-sidebar'>
              <h1>Comments</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserShow;
