import merge from 'lodash/merge';

import {
  PLYAER_PLAY,
  PLYAER_PAUSE,
  PLAY_NEW_TRACK
} from '../../actions/player_actions';

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
    case PLAY_NEW_TRACK:
    return merge(
      newState,
      oldState,
      { playing: true, currentTrack: action.newTrack.id }
    );
    default:
      return oldState;
  }
};

export default PlayerReducer;
