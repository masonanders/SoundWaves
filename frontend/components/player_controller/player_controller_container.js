import { connect } from "react-redux";
import PlayerController from "./player_controller";

import { play, pause, stop, playNew } from "../../actions/player_actions";

const mapStateToProps = state => ({
  state
});

const mapDispatchToProps = dispatch => ({
  play: () => dispatch(play()),
  pause: () => dispatch(pause()),
  stop: () => dispatch(stop()),
  playNew: track => dispatch(playNew(track))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerController);
