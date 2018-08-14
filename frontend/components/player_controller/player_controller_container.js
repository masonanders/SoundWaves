import { connect } from 'react-redux';
import PlayerController from './player_controller';

import { play, pause } from '../../actions/player_actions';

const mapStateToProps = state => ({
  state
});

const mapDispatchToProps = dispatch => ({
  play: () => dispatch(play()),
  pause: () => dispatch(pause())
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayerController);
