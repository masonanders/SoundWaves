import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TrackShow from './track_show';

import { fetchTrackBy } from '../../actions/track_actions';
import { play, pause, playNew } from '../../actions/player_actions';
import { findTrackByTitle, findArtistByTrackTitle } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  state,
  track: findTrackByTitle(state, ownProps.match.params.title),
  artist: findArtistByTrackTitle(state, ownProps.match.params.title)
});

const mapDispatchToProps = dispatch => ({
  play: () => dispatch(play()),
  pause: () => dispatch(pause()),
  playNew: (track) => dispatch(playNew(track)),
  fetchTrackBy: params => dispatch(fetchTrackBy(params))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TrackShow));
