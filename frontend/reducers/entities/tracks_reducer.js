import merge from 'lodash/merge';

import {
  RECEIVE_TRACK,
  RECEIVE_TRACKS,
  REMOVE_TRACK
} from '../../actions/track_actions';

const TracksReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = {};

  switch (action.type) {
    case RECEIVE_TRACK:
      return merge(
        newState,
        oldState,
        { [action.track.id]: action.track }
      );
    case RECEIVE_TRACKS:
      const tracks = {};
      action.tracks.forEach(track => {tracks[track.id] = track;});
      return merge(newState, oldState, tracks);
    case REMOVE_TRACK:
      newState = merge(newState, oldState);
      delete newState[action.trackId];
      return newState;
    default:
      return oldState;
  }
};

export default TracksReducer;
