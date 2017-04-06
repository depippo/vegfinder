class Place < ApplicationRecord
  has_many :place_collections
  has_many :collections, through: :place_collections
  has_many :recoommendations
  has_many :reviews
end