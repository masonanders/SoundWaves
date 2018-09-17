import merge from "lodash/merge";

import {
  OPEN_SESSION_MODAL,
  CLOSE_SESSION_MODAL
} from "../../actions/session_modal_actions";
import { QUIT_SESSION } from "../../actions/session_actions";

const _emtpyFields = {
  modalOn: false,
  username_text: "",
  action: null
};

const SessionModalReducer = (oldState = _emtpyFields, action) => {
  Object.freeze(oldState);
  let newState = {};
  switch (action.type) {
    case OPEN_SESSION_MODAL:
      return merge(newState, oldState, {
        modalOn: true,
        action: action.action
      });
    case QUIT_SESSION:
    case CLOSE_SESSION_MODAL:
      return merge(newState, oldState, {
        username_text: action.username,
        modalOn: false,
        action: action.action
      });
    default:
      return oldState;
  }
};

export default SessionModalReducer;
