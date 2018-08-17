json.set! :comments do
  json.array!(@comments) do |comment|
    json.content comment.content
    json.id comment.id
    json.track_id comment.track_id
    json.author_id comment.author_id
  end
end

json.set! :users do
  json.array!(@users) do |user|
    json.username user.username
    json.id user.id
  end
end
