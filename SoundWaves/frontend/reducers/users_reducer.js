import merge from 'lodash/merge';

import { RECEIVE_USER, REMOVE_USER } from '../actions/user_actions';
import { START_SESSION } from '../actions/session_actions';

const UsersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = {};
  switch (action.type) {
    case START_SESSION:
      return merge(newState, oldState, { [action.user.id]: action.user });
    case RECEIVE_USER:
      return merge(newState, oldState, { [action.user.id]: action.user });
    case REMOVE_USER:
      newState = merge(newState, oldState);
      delete newState[action.id];
      return newState;
    default:
      return oldState;
  }
};

export default UsersReducer;
