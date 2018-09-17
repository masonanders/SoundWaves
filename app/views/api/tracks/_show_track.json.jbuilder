json.extract! track, :id, :title, :artist_id, :description
json.imageId track.id.hash % 26
if track.audio.attached?
  json.audioUrl url_for(track.audio)
end
