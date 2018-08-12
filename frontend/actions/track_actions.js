import * as TrackApiUtil from '../util/track_api_util';

export const RECEIVE_TRACK = 'RECEIVE_TRACK';
export const RECEIVE_TRACKS = 'RECEIVE_TRACKS';
export const RECEIVE_TRACK_ERRORS = 'RECEIVE_TRACK_ERRORS';
export const REMOVE_TRACK = 'REMOVE_TRACK';

export const fetchTrack = id => dispatch => (
  TrackApiUtil.fetchTrack(id)
    .then(
      track => dispatch(receiveTrack(track)),
      error => dispatch(receiveError(error))
    )
);

export const fetchTrackBy = trackParams => dispatch => (
  TrackApiUtil.fetchTracksBy(trackParams)
    .then(
      tracks => dispatch(receiveTracks(tracks)),
      error => dispatch(receiveError(error))
    )
);

export const createTrack = track => dispatch => (
  TrackApiUtil.createTrack(track)
    .then(
      newTrack => dispatch(receiveTrack(newTrack)),
      error => dispatch(receiveError(error))
    )
);

export const updateTrack = track => dispatch => (
  TrackApiUtil.updateTrack(track)
    .then(
      updTrack => dispatch(receiveTrack(updTrack)),
      error => dispatch(receiveError(error))
    )
);

export const deleteTrack = id => dispatch => (
  TrackApiUtil.deleteTrack(id)
    .then(
      trackId => dispatch(removeTrack(trackId)),
      error => dispatch(receiveError(error))
    )
);

const receiveTrack = track => ({
  type: RECEIVE_TRACK,
  track
});

const receiveTracks = tracks => ({
  type: RECEIVE_TRACKS,
  tracks
});

const removeTrack = id => ({
  type: REMOVE_TRACK,
  id
});

const receiveError = error => ({
  type: RECEIVE_TRACK_ERRORS,
  error
});
