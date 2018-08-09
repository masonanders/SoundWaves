import { connect } from 'react-redux';
import { beginSession } from '../../actions/session_actions';
import { createUser } from '../../actions/user_actions';
import SessionModal from './new_session_modal';

const mapStateToProps = (props) => ({
  state: props
});

const mapDispatchToProps = dispatch => ({
  beginSession: (userParams) => dispatch(beginSession(userParams)),
  createUser: (user) => dispatch(createUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionModal);
