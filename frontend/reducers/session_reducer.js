import merge from 'lodash/merge';

import {
  START_SESSION,
  QUIT_SESSION
} from '../actions/session_actions';
import {
  REMOVE_USER
} from '../actions/user_actions';

const _nullUser = {
  currentUser: null,
  loggedIn: false
};

const SessionReducer = (oldState = _nullUser, action) => {
  Object.freeze(oldState);
  let newState = {};
  switch (action.type) {
    case START_SESSION:
      console.log('TEST');
      return merge(newState, oldState, {
        currentUser: action.user.id,
        loggedIn: true
      });
    case REMOVE_USER:
    case QUIT_SESSION:
      return merge(newState, oldState, _nullUser);
    default:
      return oldState;
  }
};

export default SessionReducer;
