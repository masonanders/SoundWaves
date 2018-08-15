json.set! 'tracks' do
  json.array!(@tracks) do |track|
    json.id track.id
    json.title track.title
    json.artist_id track.artist_id
    json.description track.description
    if track.audio.attached?
      json.audioUrl url_for(track.audio)
    end
  end
end

json.set! 'users' do
  json.array!(@users) do |user|
    json.username user.username
    json.id user.id
  end
end
