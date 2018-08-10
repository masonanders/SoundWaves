class RemoveUserEmailUnique < ActiveRecord::Migration[5.2]
  def change
    remove_index "users", name: "index_users_on_email"
  end
end
