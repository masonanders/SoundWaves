import merge from "lodash/merge";

import { RECEIVE_USERS } from "../../actions/user_actions";
import { QUIT_SESSION } from "../../actions/session_actions";

const UsersSearchReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  let newState = [];

  switch (action.type) {
    case RECEIVE_USERS:
      const userIds = action.users.map(user => user.id);
      return newState.concat(userIds);
    case QUIT_SESSION:
      return newState;
    default:
      return oldState;
  }
};

export default UsersSearchReducer;
