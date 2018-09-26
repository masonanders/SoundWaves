import React from "react";
import { Link } from "react-router-dom";
import NavUserDropdown from "./nav_user_dropdown";
import EventListener from "react-event-listener";
import NavSearch from "./nav_search_container";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  handleUserDropdown(e) {
    const { closeUserDrop, openUserDrop } = this.props;
    let userDrop =
      (e.path[0].className === "dropdown-button" ||
        e.path[1].className === "dropdown-button") &&
      !this.props.userDrop
        ? openUserDrop()
        : closeUserDrop();
  }

  highlightLocation(address, className) {
    const currentPage = this.props.location.pathname;
    if (address === currentPage) {
      className = `${className} highlight`;
    }
    return className;
  }

  render() {
    const user = this.props.user ? this.props.user : { username: "" };
    const { endSession, userDrop } = this.props;
    const userDropClass = userDrop ? "user open" : "user";
    return (
      <div className="nav-bar-container">
        <Link to="/">
          <div className="home-container">
            <button className="logo-button">
              <div />
            </button>
            <button className={this.highlightLocation("/stream", "home")}>
              <h3>Home</h3>
            </button>
          </div>
        </Link>

        <NavSearch />

        <div className="navigation">
          <a href="https://www.linkedin.com/in/mason-anders" target='_blank'>
            <button className="self-promotion">
              <h3>Meet the developer</h3>
            </button>
          </a>

          <Link to="/upload">
            <button className={this.highlightLocation("/upload", "upload")}>
              <h3>Upload</h3>
            </button>
          </Link>

          <div className={userDropClass}>
            <EventListener
              target="window"
              onClick={e => this.handleUserDropdown(e)}
            />
            <button className="dropdown-button">
              <img src={window.images.userIcons[user.imageId]} />
              <h3>{`${user.username} ⌄`}</h3>
            </button>
            <NavUserDropdown
              username={user.username}
              logout={endSession}
              userDrop={userDrop}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
