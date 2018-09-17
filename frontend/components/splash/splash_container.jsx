import { connect } from "react-redux";
import { beginSession, findExistingUser } from "../../actions/session_actions";
import { createUser, fetchUserBy } from "../../actions/user_actions";
import { openModal, closeModal } from "../../actions/session_modal_actions";
import { clearErrors, createCustomError } from "../../actions/errors_actions";
import SplashShow from "./splash_show";

const mapStateToProps = state => ({
  state: state
});

const mapDispatchToProps = dispatch => ({
  beginSession: userParams => dispatch(beginSession(userParams)),
  createUser: userParams => dispatch(createUser(userParams)),
  fetchUserBy: params => dispatch(fetchUserBy(params)),
  openModal: (actions, boolean) => dispatch(openModal(actions, boolean)),
  closeModal: username => dispatch(closeModal(username)),
  clearErrors: () => dispatch(clearErrors()),
  createCustomError: error => dispatch(createCustomError(error)),
  findExistingUser: userParams => dispatch(findExistingUser(userParams))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SplashShow);
