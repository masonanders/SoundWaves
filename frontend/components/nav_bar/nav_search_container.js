import { connect } from "react-redux";
import { fetchTrackBy } from "../../actions/track_actions";
import NavSearch from "./nav_search";
import { withRouter } from "react-router";


const mapStateToProps = state => ({
  state
});

const mapDispatchToProps = dispatch => ({
  fetchTrackBy: (param, limit) => dispatch(fetchTrackBy(param, limit))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NavSearch));
