export const findTrackByTitle = (state, title) => {
  const tracks = Object.values(state.entities.tracks);

  for (let i = 0; i < tracks.length; i++) {
    if (tracks[i].title === title) {
      return tracks[i];
    }
  }

  return null;
};

export const findArtistByTrackTitle = (state, title) => {
  const track = findTrackByTitle(state, title);

  if (track) {
    const artist = state.entities.users[track.artist_id];

    if (artist) {
      return artist;
    }
  }

  return null;
};
