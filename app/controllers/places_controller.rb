class PlacesController < ApplicationController

  def show
    render json: Place.find(params[:id])
  end
  
  def update
    place = Place.find(params[:id])
    recommendation = Recommendation.find_or_create_by(recommendation_params)
    recommendation.save
    place.recommendations << recommendation
    place.save
    render json: place
  end

  def recs
    place = Place.find(params[:id])
    render json: place.recommendations
  end


private

  def recommendation_params
    params.require(:recommendation).permit(:dish)
  end


end
