Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: "public#index"
  resources :communities do
    resources :posts
  end

  resources :subscriptions
  resources :comments, only: [:create]

  get "u/:username" => "public#profile", as: :profile

  post "post/vote" => "votes#create"
end
