class PortfolioController < ApplicationController
	def static
		render :static
	end

	def contact_me
		Mailer.contact_me(params).deliver!
		render json: {}
	end
end
