Rails.application.routes.draw do
  get '/topics/:topic_id/posts/:id', to: 'posts#add_topic'
  resources :topics
  resources :posts


  
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
