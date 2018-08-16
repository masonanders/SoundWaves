export const PLYAER_PLAY = 'PLYAER_PLAY';
export const PLYAER_PAUSE = 'PLYAER_PAUSE';
export const PLAYER_STOP = 'PLAYER_STOP';
export const PLAY_NEW_TRACK = 'PLAY_NEW_TRACK';

export const play = () => dispatch => (
  dispatch({ type: PLYAER_PLAY })
);

export const pause = () => dispatch => (
  dispatch({ type: PLYAER_PAUSE })
);

export const stop = () => dispatch => (
  dispatch({ type: PLAYER_STOP })
);

export const playNew = (newTrack) => dispatch => (
  dispatch({ type: PLAY_NEW_TRACK, newTrack})
);
