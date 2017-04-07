class PlacesController < ApplicationController

  def show
    render json: Place.find(params[:id])
  end

  def index
    render json: Place.all
  end
  
  def update
    place = Place.find(params[:id])
    recommendation = Recommendation.find_or_create_by(recommendation_params)
    recommendation.save
    place.recommendations << recommendation
    place.save
    render json: recommendation
  end

  def review
    place = Place.find(params[:id])
    review = Review.find_or_create_by(review_params)
    review.save
    place.reviews << review
    place.save
    render json: review
  end

  def recs
    place = Place.find(params[:id])
    render json: place.recommendations
  end


private

  def recommendation_params
    params.require(:recommendation).permit(:dish, :user_id)
  end

  def review_params
    params.require(:review).permit(:content, :user_id)
  end

end
