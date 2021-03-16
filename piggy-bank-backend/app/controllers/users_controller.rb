class UsersController < ApplicationController
	# def new
	# 	@user = User.new
	# end

	def index
		users = User.all
		render json: users
	end

	def show
		user = User.find_by(params[:id])
		render json: UserSerializer.new(user).to_serialized_json
	end
end
