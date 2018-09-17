json.extract! user, :id, :username
json.imageId user.id.hash % 11
