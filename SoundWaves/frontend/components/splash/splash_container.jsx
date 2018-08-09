import { connect } from 'react-redux';
import { beginSession, createUser } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/session_modal_actions';
import SplashShow from './splash_show';

// TODO ask why this is rendering the state as undefined
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
