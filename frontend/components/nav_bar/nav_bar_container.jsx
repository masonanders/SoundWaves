import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import NavBar from './nav_bar';

import { endSession } from '../../actions/session_actions';
import { openUserDrop, closeUserDrop } from '../../actions/nav_bar_actions';

const mapStateToProps = state => ({
  user: state.entities.users[state.session.currentUser],
  userDrop: state.ui.navBar.userDrop,
  state: state.ui.navBar
});

const mapDispatchToProps = dispatch => ({
  endSession: () => dispatch(endSession()),
  openUserDrop: () => dispatch(openUserDrop()),
  closeUserDrop: () => dispatch(closeUserDrop())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));
