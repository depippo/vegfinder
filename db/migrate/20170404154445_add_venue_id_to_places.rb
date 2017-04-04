class AddVenueIdToPlaces < ActiveRecord::Migration[5.0]
  def change
    add_column :places, :venue_id, :string
  end
end
