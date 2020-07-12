Rails.application.routes.draw do
  root 'welcome#index'

  resources 'about_us'
  resources 'ways_to_help'
end
