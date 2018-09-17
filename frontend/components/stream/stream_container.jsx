import { connect } from "react-redux";
import SplashShow from "./stream_show";

import { endSession } from "../../actions/session_actions";

const mapStateToProps = state => ({
  state
});

const mapDispatchToProps = dispatch => ({
  endSession: () => dispatch(endSession())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SplashShow);
