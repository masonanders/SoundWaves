json.array!(@tracks) do |track|
  json.id track.id
  json.title track.title
  json.artist_id track.artist_id
  json.description track.description
end
