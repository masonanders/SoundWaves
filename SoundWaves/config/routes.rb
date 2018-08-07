Rails.application.routes.draw do
  namespace :api do
    get 'users/create'
    get 'users/show'
    get 'users/update'
    get 'users/destroy'
  end
  root "static_pages#root"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
