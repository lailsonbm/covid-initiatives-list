Rails.application.routes.draw do
  root 'welcome#index'

  resources 'about_us'
end
