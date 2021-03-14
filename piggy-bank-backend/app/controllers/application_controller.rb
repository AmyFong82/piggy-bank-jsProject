class ApplicationController < ActionController::API

  #the following 3 lines are from this tutorial: https://pragmaticstudio.com/tutorials/rails-session-cookies-for-api-authentication
  #because ActionController::API doesn't include cookie and session functionality.
  include ActionController::Cookies
  include ActionController::RequestForgeryProtection

  before_action :set_csrf_cookie
  # protect_from_forgery :exception


  def logged_in?
  	session[:user_id]
  end

  def current_user
    if logged_in?
  	 User.find(session[:user_id])
    end
  end

	def require_login
		redirect_to '/login' unless current_user
	end

  private

  def set_csrf_cookie
    cookies["CSRF-TOKEN"] = form_authenticity_token
  end

end
