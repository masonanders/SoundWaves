export const createComment = comment =>
  $.ajax({
    url: "/api/comments",
    method: "post",
    data: { comment }
  });

export const updateComment = comment =>
  $.ajax({
    url: `/api/comments/${comment.id}`,
    method: "patch",
    data: { comment }
  });

export const fetchComments = comment_params =>
  $.ajax({
    url: "api/comments",
    method: "get",
    data: { comment_params }
  });

export const deleteComment = commentId =>
  $.ajax({
    url: `/api/comments/${commentId}`,
    method: "delete"
  });
