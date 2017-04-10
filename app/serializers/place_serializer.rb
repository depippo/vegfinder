class PlaceSerializer < ActiveModel::Serializer
  attributes :id, :name, :menu, :url, :address, :description, :image, :venue_id
  has_many :recommendations
  has_many :reviews
end
