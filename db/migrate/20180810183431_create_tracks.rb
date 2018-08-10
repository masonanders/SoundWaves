class CreateTracks < ActiveRecord::Migration[5.2]
  def change
    create_table :tracks do |t|
      t.string :title, null: false, limit: 100
      t.integer :artist_id, null: false
      t.string :description, limit: 500

      t.timestamps
    end
    add_index :tracks, :title
    add_index :tracks, :artist_id
  end
end
