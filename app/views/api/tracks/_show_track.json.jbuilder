json.extract! track, :id, :title, :artist_id, :description
json.audioUrl url_for(track.audio)
