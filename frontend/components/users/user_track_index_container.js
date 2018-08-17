import { connect } from 'react-redux';
import UserIndex from './user_track_index';

import {
  play,
  pause,
  playNew
} from '../../actions/player_actions';

const mapStateToProps = (state) => ({
  state: state
});

const mapDispatchToProps = dispatch => ({
  play: () => dispatch(play()),
  pause: () => dispatch(pause()),
  playNew: track => dispatch(playNew(track))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserIndex);
