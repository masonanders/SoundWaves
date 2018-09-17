import merge from "lodash/merge";

import {
  START_SESSION,
  QUIT_SESSION,
  RECEIVE_EXISTING_USER
} from "../../actions/session_actions";
import { REMOVE_USER } from "../../actions/user_actions";

const _nullUser = {
  existingUser: false,
  currentUser: null,
  loggedIn: false
};

const SessionReducer = (oldState = _nullUser, action) => {
  Object.freeze(oldState);
  let newState = {};
  switch (action.type) {
    case START_SESSION:
      return merge(newState, oldState, {
        currentUser: action.user.id,
        loggedIn: true
      });
    case RECEIVE_EXISTING_USER:
      return merge(newState, oldState, { existingUser: Boolean(action.user) });
    case REMOVE_USER:
    case QUIT_SESSION:
      return merge(newState, oldState, _nullUser);
    default:
      return oldState;
  }
};

export default SessionReducer;
