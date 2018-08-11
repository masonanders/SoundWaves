export const fetchTrack = id => (
  $.ajax({
    url: `/api/tracks/${id}`,
    method: 'get'
  })
);

export const fetchTracksBy = trackParams => (
  $.ajax({
    url: `/api/tracks`,
    method: 'get',
    data: { trackParams }
  })
);

export const createTrack = track => (
  $.ajax({
    url: `/api/tracks`,
    method: 'post',
    data: { track }
  })
);

export const updateTrack = track => (
  $.ajax({
    url: `/api/tracks/${track.id}`,
    method: 'patch',
    data: { track }
  })
);

export const deleteTrack = id => (
  $.ajax({
    url: `/api/tracks/${id}`,
    method: 'delete',
    data: { id }
  })
);
