class CoreController < ApplicationController
  def index
  end

  def ajaxmobile
  	@iphone = request.user_agent.include? 'iPhone'
  	@ipad = request.user_agent.include? 'iPad'
  	render layout: false
  end
end
