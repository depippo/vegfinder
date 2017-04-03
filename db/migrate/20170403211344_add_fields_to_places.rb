class AddFieldsToPlaces < ActiveRecord::Migration[5.0]
  def change
        add_column :places, :menu, :string
        add_column :places, :address, :string
        add_column :places, :description, :string
  end
end
