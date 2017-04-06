Rails.application.routes.draw do
  resources :reviews
  resources :recommendations
  devise_for :users
  scope :api do
    get "/collections(.:format)" => "collections#index"
    get "/collections/:id(.:format)" => "collections#show"
    get "/places/:id(.:format)" => "places#show"
    get "/users/:id(.:format)" => "users#show"
    put "/collections(.:format)" => "collections#create"
    put "/collections/:collection_id/places(.:format)" => "collections#update"
    put "/places/:id/recommendations(.:format)" => "places#update"
    get "/places/:id/recommendations(.:format)" => "places#recs"
  end
  root 'application#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
