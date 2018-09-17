import { connect } from "react-redux";
import Comments from "./comments.jsx";

import {
  fetchComments,
  createComment,
  updateComment,
  deleteComment,
  clearComments
} from "../../actions/comment_actions";
import { findTrackByTitle } from "../../reducers/selectors";

const mapStateToProps = state => ({
  state: state,
  comments: state.entities.comments,
  users: state.entities.users,
  currentUserId: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchComments: trackId => dispatch(fetchComments(trackId)),
  createComment: comment => dispatch(createComment(comment)),
  updateComment: comment => dispatch(updateComment(comment)),
  deleteComment: id => dispatch(deleteComment(id)),
  findTrackByTitle: (sta, title) => findTrackByTitle(sta, title),
  clearComments: () => dispatch(clearComments())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);
