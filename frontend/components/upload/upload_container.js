import { connect } from "react-redux";
import Upload from "./upload";

import { createTrack, RECEIVE_TRACK } from "../../actions/track_actions";
import { clearErrors } from "../../actions/errors_actions";

const mapStateToProps = state => ({
  state
});

const mapDispatchToProps = dispatch => ({
  createTrack: track => dispatch(createTrack(track)),
  clearErrors: () => dispatch(clearErrors()),
  RECEIVE_TRACK: RECEIVE_TRACK
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Upload);
