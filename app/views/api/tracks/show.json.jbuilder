json.set! :track do
  json.partial! 'api/tracks/show_track', track: @track
end
json.set! :user do
  json.partial! 'api/users/show_user', user: @user
end
