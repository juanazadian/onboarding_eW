Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  root "home#index"
  get "/:category", to: "home#index"
  resources :providers
  devise_for :users, controllers: {registrations: "registrations"}
end
