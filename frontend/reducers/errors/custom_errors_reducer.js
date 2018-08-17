import merge from 'lodash/merge';

import { CLEAR_ERRORS, RECEIVE_CUSTOM_ERROR } from '../../actions/errors_actions';
import { QUIT_SESSION } from '../../actions/session_actions';

const CustomErrorsReducer = (oldState = [], action) => {
  let newState = [];
  switch (action.type) {
    case RECEIVE_CUSTOM_ERROR:
      return newState.concat(oldState, action.error);
    case QUIT_SESSION:
    case CLEAR_ERRORS:
      return newState;
    default:
      return oldState;
  }
};

export default CustomErrorsReducer;
