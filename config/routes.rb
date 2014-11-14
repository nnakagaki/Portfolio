Rails.application.routes.draw do
  root to: "portfolio#static"

  get "/contact_me", to: "portfolio#contact_me"
end
