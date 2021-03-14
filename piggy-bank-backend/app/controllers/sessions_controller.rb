class SessionsController < ApplicationController
    # skip_before_action :verify_authenticity_token, only: :create

  # def new
  # end

  def create
    # if params[:username];
      user = User.find_by(username: params[:username])
      if user
        if user.authenticate(params[:password])
          session = {"user_id" => user.id}
          redirect_to user
        # else
        #   flash[:alert] = "Password incorrect."
        #   redirect_to '/login'
        end
      # else
      #   flash[:alert] = "This username is not registered."
      #   redirect_to '/login'
      end
    # end
  end

  def destroy
    session.delete :user_id
    flash[:alert] = "You've successfully logged out."
    redirect_to '/'
  end

  protected

  def auth
      request.env['omniauth.auth']
  end

end