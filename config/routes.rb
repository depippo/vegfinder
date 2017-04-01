Rails.application.routes.draw do
  devise_for :users
  scope :api do
    get "/collections(.:format)" => "collections#index"
    get "/collections/:id(.:format)" => "collections#show"
  end
  root 'application#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
