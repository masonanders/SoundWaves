json.array!(comments) do |comment|
  json.content comment.content
  json.id comment.id
  json.track_id comment.track_id
  json.user_id comment.author_id
end
