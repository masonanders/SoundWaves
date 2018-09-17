export const OPEN_USER_DROP = "OPEN_USER_DROP";
export const CLOSE_USER_DROP = "CLOSE_USER_DROP";

export const openUserDrop = () => dispatch =>
  dispatch({ type: OPEN_USER_DROP });

export const closeUserDrop = () => dispatch =>
  dispatch({ type: CLOSE_USER_DROP });
