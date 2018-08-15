json.extract! track, :id, :title, :artist_id, :description
if track.audio.attached?
  json.audioUrl url_for(track.audio)
end
