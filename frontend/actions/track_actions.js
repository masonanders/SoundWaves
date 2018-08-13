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

export const fetchTrackBy = (trackParams, limit) => dispatch => (
  TrackApiUtil.fetchTracksBy(trackParams, limit)
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

const receiveTrack = ({ track, user }) => ({
  type: RECEIVE_TRACK,
  track
});

const receiveTracks = ({ tracks, users }) => ({
  type: RECEIVE_TRACKS,
  tracks,
  users
});

const removeTrack = id => ({
  type: REMOVE_TRACK,
  id
});

const receiveError = errors => ({
  type: RECEIVE_TRACK_ERRORS,
  errors
});
