import merge from 'lodash/merge';

import { RECEIVE_ERRORS } from '../actions/session_actions';

const UsersReducer = (_, action) => {
  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errors;
    default:
      return [];
  }
};

export default UsersReducer;
