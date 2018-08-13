import merge from 'lodash/merge';

import { RECEIVE_USERS } from '../../actions/user_actions';

const UsersSearchReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  let newState = [];

  switch (action.type) {
    case RECEIVE_USERS:
      const userIds = action.users.map(user => user.id);
      return newState.concat(userIds);
    default:
      return oldState;
  }
};

export default UsersSearchReducer;
