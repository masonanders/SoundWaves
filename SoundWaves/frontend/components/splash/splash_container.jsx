import { connect } from 'react-redux';
import { beginSession } from '../../actions/session_actions';
import { createUser } from '../../actions/user_actions';
import { openModal, closeModal } from '../../actions/session_modal_actions';
import SplashShow from './splash_show';

const mapStateToProps = (state) => ({
  state: state
});

const mapDispatchToProps = dispatch => ({
  beginSession: (userParams) => dispatch(beginSession(userParams)),
  createUser: (userParams) => dispatch(createUser(userParams)),
  openModal: (actions) => dispatch(openModal(actions)),
  closeModal: (username) => dispatch(closeModal(username))
});

export default connect(mapStateToProps, mapDispatchToProps)(SplashShow);
