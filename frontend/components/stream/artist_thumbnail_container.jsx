import { connect } from 'react-redux';
import ArtistThumbnailList from './artist_thumbnail_list';

import { fetchUserBy } from '../../actions/user_actions';

const mapStateToProps = state => ({
  state
});

const mapDispatchToProps = () => dispatch => ({
  fetchUserBy: (params, limit) => dispatch(fetchUserBy(params, limit))
});

export default connect(mapStateToProps,
  mapDispatchToProps)(ArtistThumbnailList);
