Rails.application.routes.draw do
  # resources :activities
  resources :users
  resources :sessions
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get '/users/:id' => 'users#show'

  post '/login' => 'sessions#create'  
end
