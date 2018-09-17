import merge from "lodash/merge";

import {
  RECEIVE_USER,
  RECEIVE_USERS,
  REMOVE_USER,
  RECEIVE_USER_ERRORS
} from "../../actions/user_actions";
import { CLOSE_SESSION_MODAL } from "../../actions/session_modal_actions";
import { CLEAR_ERRORS } from "../../actions/errors_actions";
import { QUIT_SESSION } from "../../actions/session_actions";

const UserErrorsReducer = (oldState = [], action) => {
  let newState = [];
  switch (action.type) {
    case RECEIVE_USER_ERRORS:
      return newState.concat(oldState, action.errors);
    case CLOSE_SESSION_MODAL:
    case RECEIVE_USER:
    case RECEIVE_USERS:
    case REMOVE_USER:
    case QUIT_SESSION:
    case CLEAR_ERRORS:
      return newState;
    default:
      return oldState;
  }
};

export default UserErrorsReducer;
