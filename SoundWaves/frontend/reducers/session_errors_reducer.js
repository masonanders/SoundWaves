import merge from 'lodash/merge';

import {
  START_SESSION,
  QUIT_SESSION,
  RECEIVE_SESSION_ERRORS
} from '../actions/session_actions';
import { CLOSE_SESSION_MODAL } from '../actions/session_modal_actions';

const SessionErrorsReducer = (oldState = [], action) => {
  let newState = [];
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return newState.concat(oldState, action.errors);
    case CLOSE_SESSION_MODAL:
    case START_SESSION:
    case QUIT_SESSION:
      return newState;
    default:
      return oldState;
  }
};

export default SessionErrorsReducer;
