import React from 'react';
import { Link } from 'react-router-dom';
import NavUserDropdown from './nav_user_dropdown';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps() {
  }

  handleUserDropdown(e) {
    const { userDrop, openUserDrop, closeUserDrop} = this.props;
    userDrop ? closeUserDrop() : openUserDrop();
  }

  highlightLocation(address, className) {
    const currentPage = this.props.location.pathname;
    if (address === currentPage) {
      className = `${className} highlight`;
    }
    return className;
  }

  render() {
    const user = this.props.user ? this.props.user : { username: '' };
    const { endSession, userDrop, closeUserDrop } = this.props;
    const userDropClass = userDrop ? 'user open' : 'user';
    return (
      <div className='nav-bar-container'>
        <Link to='/'>
          <div className='home-container'>
            <button
              className="logo-button"
              ><div></div>
            </button>
            <button
              className={this.highlightLocation('/stream', 'home')}
              ><h3>Home</h3>
            </button>
          </div>
        </Link>

          <div className="nav-searchbar-container">
            <input
              onChange={(e) => {
                e.target.placeholder = 'Not yet implemented';
                e.target.value = '';
              }}
              className="nav-searchbar"
              type='search'
              placeholder='Search'
            />
          <button
            className="nav-search-button"
            onClick={null}
            />
          </div>

          <div className='navigation'>
            <a href='https://www.linkedin.com/in/mason-anders-416274130/' >
              <button
                className="self-promotion"
                ><h3>Meet the developer</h3>
              </button>
            </a>

            <Link to='/upload' >
              <button
                className={this.highlightLocation('/upload', 'upload')}
                ><h3>Upload</h3>
              </button>
            </Link>

            <div className={userDropClass}>
              <button
                className='dropdown-button'
                onClick={(e) => this.handleUserDropdown(e)}>
                <img src={window.images.defaultUserIcon} />
                <h3>{`${user.username} ⌄`}</h3>
              </button>
              <NavUserDropdown
                username={user.username}
                logout={endSession}
                userDrop={userDrop}
                closeUserDrop={closeUserDrop}/>
            </div>
          </div>

      </div>
    );
  }
}

export default NavBar;
