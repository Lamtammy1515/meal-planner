Rails.application.routes.draw do
  resources :meals, only: :index
  resources :foods, only: [:index, :destroy, :create]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
