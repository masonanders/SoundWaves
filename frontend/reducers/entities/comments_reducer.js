import merge from 'lodash/merge';

import {
  RECEIVE_COMMENTS,
  RECEIVE_COMMENT,
  REMOVE_COMMENT,
  RECEIVE_COMMENT_ERRORS,
  CLEAR_COMMENTS
} from '../../actions/comment_actions';

const CommentsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = {};

  switch (action.type) {
    case RECEIVE_COMMENT:
      return merge(newState, oldState, { [action.comment.id]: action.comment });
    case RECEIVE_COMMENTS:
      action.comments.forEach(comment => { newState[comment.id] = comment; });
      return newState;
    case REMOVE_COMMENT:
      newState = merge(newState, oldState);
      delete newState[action.id];
      return newState;
    case CLEAR_COMMENTS:
      return newState;
    default:
      return oldState;
  }
};

export default CommentsReducer;
