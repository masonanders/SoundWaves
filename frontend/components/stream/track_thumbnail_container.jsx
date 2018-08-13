import { connect } from 'react-redux';
import TrackThumbnailList from './track_thumbnail_list';

import { fetchTrackBy } from '../../actions/track_actions';

const mapStateToProps = state => ({
  state
});

const mapDispatchToProps = () => dispatch => ({
  fetchTracksBy: (params, limit) => dispatch(fetchTrackBy(params, limit))
});

export default connect(mapStateToProps,
  mapDispatchToProps)(TrackThumbnailList);
