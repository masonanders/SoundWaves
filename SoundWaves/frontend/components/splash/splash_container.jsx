import { connect } from 'react-redux';
import { beginSession } from '../../actions/session_actions';
import { openModal } from '../../actions/session_modal_actions';
import SplashShow from './splash_show';

// TODO ask why this is rendering the state as undefined
const mapStateToProps = (props) => ({
  state: props
});

const mapDispatchToProps = dispatch => ({
  beginSession: (userParams) => dispatch(beginSession(userParams)),
  openModal: (actions) => dispatch(openModal(actions))
});

export default connect(mapStateToProps, mapDispatchToProps)(SplashShow);
