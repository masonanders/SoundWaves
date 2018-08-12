import React from 'react';

const NavBar = (props) => {

  return (
    <div className='nav-bar-container'>
        <div className='home-container'>
          <button
            className="logo-button"
            onClick={() => console.log('Logo')}
            ><div></div>
          </button>

          <button
            className="home"
            onClick={() => console.log('Home')}
            ><h3>Home</h3>
          </button>
        </div>

        <div className="nav-searchbar-container">
          <input
            className="nav-searchbar"
            type='search'
            placeholder='Search'
          />
        <button
          className="nav-search-button"
          onClick={() => console.log('Search')}
          />
        </div>

        <div className='navigation'>
          <button
            className="self-promotion"
            onClick={() => console.log('Meet me')}
            ><h3>Meet the developer</h3>
          </button>

          <button
            className="upload"
            onClick={() => console.log('Upload')}
            ><h3>Upload</h3>
          </button>

          <button
            className="user"
            onClick={() => console.log('User')}
            ><h3>{`${props.user.username} ⌄`}</h3>
          </button>
        </div>

    </div>
  );
};

export default NavBar;
