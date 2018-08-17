# == Schema Information
#
# Table name: comments
#
#  id         :bigint(8)        not null, primary key
#  content    :string(250)      not null
#  author_id  :integer          not null
#  track_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ApplicationRecord
  validates :content, :author_id, :track_id, presence: true

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

  belongs_to :track,
    foreign_key: :track_id,
    class_name: :Track

end
