import * as SessionAPIUtil from '../util/session_api_util';

export const START_SESSION = "START_SESSION";
export const QUIT_SESSION = "QUIT_SESSION";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_ERRORS";

export const beginSession = userParams => dispatch => (
  SessionAPIUtil.beginSession(userParams)
  .then(
    user => dispatch(startSession(user)),
    errors => dispatch(receiveErrors(errors))
  )
);

export const endSession = () => dispatch => (
  SessionAPIUtil.endSession()
  .then(
    (resp) => dispatch(quitSession(resp)),
    errors => dispatch(receiveErrors(errors))
  )
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
