class AddNameToCollections < ActiveRecord::Migration[5.0]
  def change
    add_column :collections, :name, :string
  end
end
