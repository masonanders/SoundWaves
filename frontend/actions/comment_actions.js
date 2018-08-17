import * as CommentAPIUtil from '../util/comment_api_util';

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';

const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});

const removeComment = id => ({
  type: REMOVE_COMMENT,
  id
});

const receiveCommentErrors = errors => ({
  type: RECEIVE_COMMENT_ERRORS,
  errors
});

export const fetchComments = (trackId) => dispatch => (
  CommentAPIUtil.fetchComments(trackId)
    .then(
      comments => dispatch(receiveComments(comments)),
      errors => dispatch(receiveCommentErrors(errors))
    )
);

export const createComment = newComment => dispatch => (
  CommentAPIUtil.createComment(newComment)
    .then(
      comment => dispatch(receiveComment(comment)),
      errors => dispatch(receiveCommentErrors(errors))
    )
);

export const updateComment = updComment => dispatch => (
  CommentAPIUtil.updateComment(updComment)
    .then(
      comment => dispatch(receiveComment(comment)),
      errors => dispatch(receiveCommentErrors(errors))
    )
);

export const deleteComment = id => dispatch => (
  CommentAPIUtil.deleteComment(id)
    .then(
      comId => dispatch(removeComment(comId)),
      errors => dispatch(receiveCommentErrors(errors))
    )
);
