import { combineReducers } from 'redux';

import users from './users_reducer';
import tracks from './tracks_reducer';

export default combineReducers({
  users,
  tracks
});
