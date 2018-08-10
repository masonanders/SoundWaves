import merge from 'lodash/merge';

import {
  RECEIVE_USER,
  REMOVE_USER,
  RECEIVE_USER_ERRORS
} from '../actions/user_actions';
import { CLOSE_SESSION_MODAL } from '../actions/session_modal_actions';

const UserErrorsReducer = (oldState = [], action) => {
  let newState = [];
  switch (action.type) {
    case RECEIVE_USER_ERRORS:
      return newState.concat(oldState, action.errors);
    case CLOSE_SESSION_MODAL:
    case RECEIVE_USER:
    case REMOVE_USER:
      return newState;
    default:
      return oldState;
  }
};

export default UserErrorsReducer;
