class ApplicationController < ActionController::API

  #the following 3 lines are from this tutorial: https://pragmaticstudio.com/tutorials/rails-session-cookies-for-api-authentication
  #because ActionController::API doesn't include cookie and session functionality.
  include ActionController::Cookies
  include ActionController::RequestForgeryProtection

  before_action :set_csrf_cookie
  # protect_from_forgery :exception


  private

  def set_csrf_cookie
    cookies["CSRF-TOKEN"] = form_authenticity_token
  end

end
