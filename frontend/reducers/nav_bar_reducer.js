import merge from 'lodash/merge';

const NavBarReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = {};

  switch (action.type) {
    default:
      return oldState;
  }
};

export default NavBarReducer;
