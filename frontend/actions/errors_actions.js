export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const clearErrors = () => dispatch => (
  dispatch(removeErrors())
);

const removeErrors = () => ({
  type: CLEAR_ERRORS
});
