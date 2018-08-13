export const PLYAER_PLAY = 'PLYAER_PLAY';
export const PLYAER_PAUSE = 'PLYAER_PAUSE';
export const PLAY_NEW_TRACK = 'PLAY_NEW_TRACK';

export const play = () => dispatch => (
  dispatch({ type: PLYAER_PLAY })
);

export const pause = () => dispatch => (
  dispatch({ type: PLYAER_PAUSE })
);

export const playNew = (newTrack) => dispatch => (
  dispatch({ type: PLAY_NEW_TRACK, newTrack})
);
