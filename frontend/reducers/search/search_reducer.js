import { combineReducers } from "redux";

import users from "./user_search_reducer";
import tracks from "./track_search_reducer";

export default combineReducers({
  users,
  tracks
});
