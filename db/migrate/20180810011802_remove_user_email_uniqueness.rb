class RemoveUserEmailUniqueness < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :email, :string, unique: false
  end
end
