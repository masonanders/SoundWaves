import { combineReducers } from 'redux';

import sessionModal from './session_modal_reducer';
import navBar from './nav_bar_reducer';

export default combineReducers({
  sessionModal,
  navBar
});
