import React from "react";
import { Link } from "react-router-dom";

const NavUserDropdown = props => {
  const dropdownClass = props.userDrop
    ? "nav-user-dropdown open"
    : "nav-user-dropdown";
  // TODO nav bar closes when clicked outside
  // TODO nav bar closes when page rerenders
  return (
    <div className={dropdownClass}>
      <ul>
        <li>
          <Link to={`/${props.username}`}>Profile</Link>
        </li>
        <li>
          <button onClick={() => props.logout()}>
            <h3>Log out</h3>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default NavUserDropdown;
