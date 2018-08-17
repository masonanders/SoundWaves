class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.string :content, null: false, limit: 250
      t.integer :author_id, null: false
      t.integer :track_id, null: false

      t.timestamps
    end
  end
end
