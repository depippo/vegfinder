class PlacesController < ApplicationController

  def show
    render json: Place.find(params[:id])
  end
  
end