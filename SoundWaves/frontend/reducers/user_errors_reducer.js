import merge from 'lodash/merge';

import { RECEIVE_USER_ERRORS } from '../actions/user_actions';

const UserErrorsReducer = (oldState = [], action) => {
  switch (action.type) {
    case RECEIVE_USER_ERRORS:
      return action.errors;
    default:
      return oldState;
  }
};

export default UserErrorsReducer;
