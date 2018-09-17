import { connect } from "react-redux";
import UserShow from "./user_show";

import { fetchTrackBy } from "../../actions/track_actions";
import { fetchUserBy, deleteUser } from "../../actions/user_actions";
import { fetchComments } from "../../actions/comment_actions";
import { endSession } from "../../actions/session_actions";

const mapStateToProps = (state, ownProps) => ({
  state: state,
  currentUser: state.session.currentUser,
  username: ownProps.match.params.user
});

const mapDispatchToProps = dispatch => ({
  fetchTrackBy: param => dispatch(fetchTrackBy(param)),
  fetchUserBy: param => dispatch(fetchUserBy(param)),
  fetchComments: param => dispatch(fetchComments(param)),
  deleteUser: id => dispatch(deleteUser(id)),
  endSession: () => dispatch(endSession())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow);
