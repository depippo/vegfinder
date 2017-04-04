class CollectionsController < ApplicationController

  def index
    render json: Collection.all
  end

  def show
    render json: Collection.find(params[:id])
  end

  def update
    collection = Collection.find(params[:collection_id])
    place = Place.find_or_create_by(place_params)
    place.save
    collection.places << place unless collection.places.include?(place)
    collection.save
    user = collection.user
    render json: user
  end

  
private

  def place_params
    params.require(:place).permit(:name, :menu, :address, :description, :image, :venue_id)
  end


end



  #   def update
  #   collection = Collection.find_or_create_by(collection_params)
  #   collection.save
  # end