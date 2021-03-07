class UsersController < ApplicationController
	# def new
	# 	@user = User.new
	# end

	def show
		if current_user == User.find(params[:id])
		user = User.find(params[:id])
		render json: TrainerSerializer.new(trainers).to_serialized_json
	end
end
