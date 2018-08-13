import merge from 'lodash/merge';

import {
  RECEIVE_USER,
  RECEIVE_USERS,
  REMOVE_USER
} from '../../actions/user_actions';
import { START_SESSION } from '../../actions/session_actions';
import { RECEIVE_TRACKS } from '../../actions/track_actions';

const UsersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = {};
  const users = {};
  switch (action.type) {
    case START_SESSION:
    case RECEIVE_USER:
      return merge(newState, oldState, { [action.user.id]: action.user });
    case RECEIVE_USERS:
      action.users.forEach(user => {users[user.id] = user;});
      return merge(newState, oldState, users);
    case REMOVE_USER:
      newState = merge(newState, oldState);
      delete newState[action.id];
      return newState;
    case RECEIVE_TRACKS:
      action.users.forEach(user => {users[user.id] = user;});
      return merge(newState, oldState, users);
    default:
      return oldState;
  }
};

export default UsersReducer;
