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

require 'test_helper'

class TrackTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
