export const OPEN_SESSION_MODAL = "OPEN_SESSION_MODAL";
export const CLOSE_SESSION_MODAL = "CLOSE_SESSION_MODAL";

export const openModal = (action, demo) => dispatch => {
  dispatch(open(action, demo));
};

export const closeModal = username => dispatch => {
  dispatch(close(username));
};

const open = (action, demo) => {
  if (demo) {
    action.demoLogin = true;
  }
  return {
    type: OPEN_SESSION_MODAL,
    action
  };
};

const close = username => ({
  type: CLOSE_SESSION_MODAL,
  username,
  action: null
});
