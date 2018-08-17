import merge from 'lodash/merge';

import { RECEIVE_TRACKS } from '../../actions/track_actions';
import { QUIT_SESSION } from '../../actions/session_actions';

const TrackSearchReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  let newState = [];

  switch (action.type) {
    case RECEIVE_TRACKS:
      return newState.concat(action.tracks.map(track => track.id));
    case QUIT_SESSION:
      return newState;
    default:
      return oldState;
  }
};

export default TrackSearchReducer;
