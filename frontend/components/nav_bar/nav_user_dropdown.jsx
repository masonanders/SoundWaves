import React from 'react';
import { Link } from 'react-router-dom';

const NavUserDropdown = props => {
  const dropdownCass = props.userDrop ?
  'nav-user-dropdown open' : 'nav-user-dropdown';
  return (
    <div className={dropdownCass}>
      <ul>
        <li>
          <Link to={`${props.username}`} >Profile</Link>
        </li>
        <li>
          <button onClick={() => props.logout()}><h3>Log out</h3></button>
        </li>
      </ul>
    </div>
  );
};

export default NavUserDropdown;
