import merge from 'lodash/merge';

import {
  RECEIVE_COMMENTS,
  RECEIVE_COMMENT,
  REMOVE_COMMENT,
  RECEIVE_COMMENT_ERRORS
} from '../../actions/comment_actions';
import { CLEAR_ERRORS } from '../../actions/errors_actions';
import { QUIT_SESSION } from '../../actions/session_actions';


const CommentErrorsReducer = (oldState = [], action) => {
  let newState = [];
  switch (action.type) {
    case RECEIVE_COMMENT_ERRORS:
      return newState.concat(oldState, action.errors);
    case RECEIVE_COMMENT:
    case RECEIVE_COMMENTS:
    case REMOVE_COMMENT:
    case QUIT_SESSION:
    case CLEAR_ERRORS:
      return newState;
    default:
      return oldState;
  }
};

export default CommentErrorsReducer;
