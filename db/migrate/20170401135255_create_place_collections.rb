class CreatePlaceCollections < ActiveRecord::Migration[5.0]
  def change
    create_table :place_collections do |t|
      t.integer :collection_id
      t.integer :place_id
    end
  end
end
