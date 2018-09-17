import { combineReducers } from "redux";

import entities from "./entities/entities_reducer";
import session from "./session/session_reducer";
import ui from "./ui/ui_reducer";
import errors from "./errors/errors_reducer";
import search from "./search/search_reducer";

export default combineReducers({
  entities,
  session,
  ui,
  errors,
  search
});
