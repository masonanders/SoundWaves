import { connect } from "react-redux";
import TrackIndex from "./splash_track_index";
import { fetchTrackBy } from "../../actions/track_actions";

const mapStateToProps = state => ({
  state
});

const mapDispatchToProps = dispatch => ({
  fetchTrackBy: (params, limit) => dispatch(fetchTrackBy(params, limit))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackIndex);
