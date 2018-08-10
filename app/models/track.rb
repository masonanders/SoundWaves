# == Schema Information
#
# Table name: tracks
#
#  id          :bigint(8)        not null, primary key
#  title       :string(100)      not null
#  artist_id   :integer          not null
#  description :string(500)
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Track < ApplicationRecord
  validates :title, :artist_id, presence: true
  validates :title, length: { maximum: 100 }
  validates :description, length: { maximum: 500 }

  belongs_to :artist,
    foreign_key: :artist_id,
    primary_key: :id,
    class_name: :User
end
