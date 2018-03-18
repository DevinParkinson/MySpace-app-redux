Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    resources :myspaces, only: [:index, :update]
    get 'my_friends', to: 'myspaces#my_friends'
    resources :mes
  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
