import { connect } from 'react-redux';
import UserShow from './user_show';

import { fetchTrackBy } from '../../actions/track_actions';
import { fetchUserBy, deleteUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => ({
  state: state,
  username: ownProps.match.params.user
});

const mapDispatchToProps = dispatch => ({
  fetchTrackBy: param => dispatch(fetchTrackBy(param)),
  fetchUserBy: param => dispatch(fetchUserBy(param)),
  deleteUser: id => dispatch(deleteUser(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);
