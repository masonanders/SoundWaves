import { combineReducers } from 'redux';

import users from './user_errors_reducer';
import session from './session_errors_reducer';

export default combineReducers({
  users,
  session
});
