class CollectionsController < ApplicationController

  def index
    render json: Collection.all
  end

  def show
    render json: Collection.find(params[:id])
  end

  def create
    collection = Collection.find_or_create_by(collection_params)
    collection.save
  end
  
private

  def collection_params
    params.require(:collection).permit(:name)
  end


end