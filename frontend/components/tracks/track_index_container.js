import { connect } from 'react-redux';
import TrackIndex from './track_index';

import { fetchTrackBy } from '../../actions/track_actions';
import { play, pause, playNew } from '../../actions/player_actions';

const mapStateToProps = state => ({
  state
});

const mapDispatchToProps = dispatch => ({
  fetchTracksBy: (params, limit) => dispatch(fetchTrackBy(params, limit)),
  play: () => dispatch(play()),
  pause: () => dispatch(pause()),
  playNew: (track) => dispatch(playNew(track))
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackIndex);
