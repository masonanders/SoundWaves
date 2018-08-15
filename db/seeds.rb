# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Track.delete_all

demo_user = User.create(username: 'demo_user', password: 'iliketodemo', email: "demo@demo.com")

user_1 = User.create!(username: 'user_1', password: 'password', email: "user_1@soundwaves.com")
user_2 = User.create!(username: 'user_2', password: 'password', email: "user_2@soundwaves.com")
user_3 = User.create!(username: 'user_3', password: 'password', email: "user_3@soundwaves.com")

track1 = Track.create!(title: 'track_1', artist_id: user_1.id, description: 'track number 1')
track2 = Track.create!(title: 'track_2', artist_id: user_1.id, description: 'track number 2')
track3 = Track.create!(title: 'track_3', artist_id: user_2.id, description: 'track number 3')
track4 = Track.create!(title: 'track_4', artist_id: user_2.id, description: 'track number 4')
track5 = Track.create!(title: 'track_5', artist_id: user_3.id, description: 'track number 5')
track6 = Track.create!(title: 'track_6', artist_id: user_3.id, description: 'track number 6')

demo_track1 = Track.create!(title: 'demo_track_1', artist_id: demo_user.id, description: 'demo track number 1')
demo_track2 = Track.create!(title: 'demo_track_2', artist_id: demo_user.id, description: 'demo track number 2')
demo_track3 = Track.create!(title: 'demo_track_3', artist_id: demo_user.id, description: 'demo track number 3')

track1.audio.attach(io: File.open("/Users/mason/Desktop/audio/Fallen_Star.mp3"), filename: 'fallen_star.mp3')
track2.audio.attach(io: File.open("/Users/mason/Desktop/audio/The_Experiment.mp3"), filename: 'the_experiment.mp3')
track3.audio.attach(io: File.open("/Users/mason/Desktop/audio/Underwater_Lights.mp3"), filename: 'underwater_lights.mp3')
track4.audio.attach(io: File.open("/Users/mason/Desktop/audio/Undiscovered_Memories.mp3"), filename: 'undiscovered_memories.mp3')
track5.audio.attach(io: File.open("/Users/mason/Desktop/audio/Sounds_of_Running_Water.mp3"), filename: 'wounds_of_running_water.mp3')
track6.audio.attach(io: File.open("/Users/mason/Desktop/audio/Fallen_Star.mp3"), filename: 'fallen_star1.mp3')

demo_track1.audio.attach(io: File.open("/Users/mason/Desktop/audio/The_Experiment.mp3"), filename: 'the_experiment1.mp3')
demo_track2.audio.attach(io: File.open("/Users/mason/Desktop/audio/Underwater_Lights.mp3"), filename: 'underwater_lights1.mp3')
demo_track3.audio.attach(io: File.open("/Users/mason/Desktop/audio/Undiscovered_Memories.mp3"), filename: 'undiscovered_memories1.mp3')
