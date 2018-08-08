import * as SessionAPIUtil from '../util/session_api_util';

export const START_SESSION = "START_SESSION";
export const QUIT_SESSION = "QUIT_SESSION";

export const beginSession = userParams => dispatch => (
  SessionAPIUtil.beginSession(userParams)
  .then(user => dispatch(startSession(user)))
);

export const endSession = () => dispatch => (
  SessionAPIUtil.endSession().then((res) => dispatch(quitSession(res)))
);

const startSession = user => ({
  type: START_SESSION,
  user
});

const quitSession = res => ({
  type: QUIT_SESSION,
  res
});
