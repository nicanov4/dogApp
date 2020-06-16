Rails.application.routes.draw do
  
  root to: redirect('/breeds')

  get 'breeds', to: 'site#index'
  get 'breeds/:id', to: 'site#index'
  
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :breeds, only: [:index, :show]
  resources :favorites
end
