class PlaceSerializer < ActiveModel::Serializer
  attributes :id, :name, :menu, :address, :description
end
