export const OPEN_SESSION_MODAL = "OPEN_SESSION_MODAL";
export const CLOSE_SESSION_MODAL = "CLOSE_SESSION_MODAL";

export const openModal = action => dispatch => {
  dispatch(open(action));
};

export const closeModal = username => dispatch => {
  dispatch(close(username));
};

const open = (action) => ({
  type: OPEN_SESSION_MODAL,
  action
});

const close = username => ({
  type: CLOSE_SESSION_MODAL,
  username,
  action: null
});
