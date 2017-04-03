class CollectionSerializer < ActiveModel::Serializer
  attributes :id, :name, :places
  
  def places
    object.places.map do |place|
      PlaceSerializer.new(place)
    end
  end

end