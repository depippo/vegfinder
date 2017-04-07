class AddUserIdToRecommendations < ActiveRecord::Migration[5.0]
  def change
    add_column :recommendations, :user_id, :integer
  end
end
