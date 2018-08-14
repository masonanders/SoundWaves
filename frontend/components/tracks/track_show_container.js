import { connect } from 'react-redux';
import TrackShow from './track_show';

import { fetchTrackBy } from '../../actions/track_actions';
import { play, pause, playNew } from '../../actions/player_actions';

const mapStateToProps = state => ({
  state
});

const mapDispatchToProps = dispatch => ({
  play: () => dispatch(play()),
  pause: () => dispatch(pause()),
  playNew: (track) => dispatch(playNew(track))
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackShow);
