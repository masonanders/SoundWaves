import merge from 'lodash/merge';

import { RECEIVE_SESSION_ERRORS } from '../actions/session_actions';

const SessionErrorsReducer = (oldState = [], action) => {
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    default:
      return oldState;
  }
};

export default SessionErrorsReducer;
