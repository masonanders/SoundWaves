import merge from 'lodash/merge';

import { OPEN_USER_DROP, CLOSE_USER_DROP } from '../actions/nav_bar_actions';
import { QUIT_SESSION } from '../actions/session_actions';

const NavBarReducer = (oldState = { userDrop: false }, action) => {
  Object.freeze(oldState);
  let newState = {};

  switch (action.type) {
    case OPEN_USER_DROP:
      return merge(newState, oldState, { userDrop: true });
    case QUIT_SESSION:
    case CLOSE_USER_DROP:
      return merge(newState, oldState, { userDrop: false });
    default:
      return oldState;
  }
};

export default NavBarReducer;
