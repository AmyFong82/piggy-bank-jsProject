class User < ApplicationRecord
	has_many :goals
	has_many :activities

	has_secure_password
end
