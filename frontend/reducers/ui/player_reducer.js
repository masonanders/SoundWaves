import merge from 'lodash/merge';

import {
  PLYAER_PLAY,
  PLYAER_PAUSE,
  PLAYER_STOP,
  PLAY_NEW_TRACK
} from '../../actions/player_actions';
import { QUIT_SESSION } from '../../actions/session_actions';

const _nullTrack = {
  currentTrack: null,
  playing: false
};

const PlayerReducer = (oldState = _nullTrack, action) => {
  Object.freeze(oldState);
  let newState = {};

  switch (action.type) {
    case PLYAER_PLAY:
      return merge(newState, oldState, { playing: true });
    case PLYAER_PAUSE:
      return merge(newState, oldState, { playing: false });
    case PLAYER_STOP:
      return merge(newState, oldState, _nullTrack);
    case PLAY_NEW_TRACK:
      return merge(
        newState,
        oldState,
        { playing: true, currentTrack: action.newTrack.id }
      );
    case QUIT_SESSION:
      return newState;
    default:
      return oldState;
  }
};

export default PlayerReducer;
