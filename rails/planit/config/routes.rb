Rails.application.routes.draw do
  root "home#index"
<<<<<<< Updated upstream

=======
  get "/:category", to: "home#index"
  resources :providers
>>>>>>> Stashed changes
  devise_for :users, controllers: {registrations: "registrations"}
end
