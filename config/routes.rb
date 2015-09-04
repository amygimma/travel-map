Rails.application.routes.draw do
  root "trips#index"

  resources :trips

  namespace :api do
    resources :trips, only: [:show]
  end
end
