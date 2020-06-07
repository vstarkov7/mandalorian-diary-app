Rails.application.routes.draw do
  get '/topics/:topic_id/posts/:id', to: 'posts#add_topic'
  resources :topics
  resources :users do
    resources :posts, only: [:index, :show, :create, :update, :destroy]
  end

  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
