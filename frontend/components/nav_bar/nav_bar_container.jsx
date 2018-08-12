import { connect } from 'react-redux';
import NavBar from './nav_bar';

import { endSession } from '../../actions/session_actions';

const mapStateToProps = state => ({
  user: state.entities.users[state.session.currentUser],
  state: state.ui.nav_bar
});

const mapDispatchToProps = dispatch => ({
  endSession: () => dispatch(endSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
