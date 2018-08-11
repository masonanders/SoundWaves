export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const RECEIVE_CUSTOM_ERROR = "RECEIVE_CUSTOM_ERROR";

export const createCustomError = (error) => dispatch => (
  dispatch(receiveError(error))
);

export const clearErrors = () => dispatch => (
  dispatch(removeErrors())
);

const receiveError = (error) => ({
  type: RECEIVE_CUSTOM_ERROR,
  error: { responseJSON: [error] }
});

const removeErrors = () => ({
  type: CLEAR_ERRORS
});
