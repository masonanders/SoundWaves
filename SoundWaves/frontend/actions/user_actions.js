import * as UserAPIUtil from '../util/user_api_util';
import { START_SESSION } from './session_actions';

export const RECEIVE_USER = "RECEIVE_USER";
export const REMOVE_USER = "REMOVE_USER";

const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

const removeUser = id => ({
  type: REMOVE_USER,
  id
});

const receiveNewUser = user => ({
  type: START_SESSION,
  user
});

export const fetchUser = id => dispatch => (
  UserAPIUtil.fetchUser(id).then(user => dispatch(receiveUser(user)))
);

export const createUser = newUser => dispatch => (
  UserAPIUtil.createUser(newUser)
  .then(user => dispatch(receiveNewUser(user)))
);

export const updateUser = updUser => dispatch => (
  UserAPIUtil.updateUser(updUser).then(user => dispatch(receiveUser(user)))
);

export const deleteUser = userId => dispatch => (
  UserAPIUtil.deleteUser(userId).then(id => dispatch(removeUser(id)))
);
