Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:show, :index, :create, :update, :destroy]
    resource :session, only: [:create, :destroy]
    resources :tracks, except: [:edit, :new]
  end
  root "static_pages#root"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
