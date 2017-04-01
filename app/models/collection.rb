class Collection < ApplicationRecord
  # belongs_to :user
  has_many :place_collections
  has_many :places, through: :place_collections
end