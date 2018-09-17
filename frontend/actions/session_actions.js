import * as SessionAPIUtil from "../util/session_api_util";
import { fetchUserBy } from "../util/user_api_util";

export const START_SESSION = "START_SESSION";
export const QUIT_SESSION = "QUIT_SESSION";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_EXISTING_USER = "RECEIVE_EXISTING_USER";

export const findExistingUser = userParams => dispatch =>
  fetchUserBy(userParams).then(user => dispatch(receiveUser(user[0])));

export const beginSession = userParams => dispatch =>
  SessionAPIUtil.beginSession(userParams).then(
    user => dispatch(startSession(user)),
    errors => dispatch(receiveErrors(errors))
  );

export const endSession = () => dispatch =>
  SessionAPIUtil.endSession().then(
    resp => dispatch(quitSession(resp)),
    errors => dispatch(receiveErrors(errors))
  );

const startSession = user => ({
  type: START_SESSION,
  user
});

const quitSession = res => ({
  type: QUIT_SESSION,
  res
});

const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

const receiveUser = user => ({
  type: RECEIVE_EXISTING_USER,
  user
});
