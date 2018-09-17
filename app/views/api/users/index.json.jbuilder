json.array!(@users) do |user|
  json.username user.username
  json.id user.id
  json.imageId user.id.hash % 11
end
