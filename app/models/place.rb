class Place < ApplicationRecord
  has_many :place_collections
  has_many :collections, through: :place_collections
  has_many :recommendations
  has_many :reviews
end