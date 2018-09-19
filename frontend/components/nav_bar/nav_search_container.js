import { connect } from "react-redux";
import { fetchTrackBy } from "../../actions/track_actions";
import NavSearch from "./nav_search";

const mapStateToProps = state => ({
  state
});

const mapDispatchToProps = dispatch => ({
  fetchTrackBy: (param, limit) => dispatch(fetchTrackBy(param, limit))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavSearch);
