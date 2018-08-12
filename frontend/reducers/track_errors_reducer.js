import merge from 'lodash/merge';

import {
  RECEIVE_TRACK,
  RECEIVE_TRACKS,
  REMOVE_TRACK,
  RECEIVE_TRACK_ERRORS
} from '../actions/track_actions';
import { CLEAR_ERRORS } from '../actions/errors_actions';

const TrackErrorsReducer = (oldState = [], action) => {
  let newState = [];
  switch (action.type) {
    case RECEIVE_TRACK_ERRORS:
      return newState.concat(oldState, action.errors);
    case RECEIVE_TRACK:
    case RECEIVE_TRACKS:
    case REMOVE_TRACK:
    case CLEAR_ERRORS:
      return newState;
    default:
      return oldState;
  }
};
