class CoreController < ApplicationController
  def home
  end

  def ajaxmobile
  	@iphone = request.user_agent.include? 'iPhone'
  	@ipad = request.user_agent.include? 'iPad'
  	render layout: false
  end

  def ajaxfilters
    render "_ajaxfilters", layout: false
  end

  def activities
  	@activities = Activity.all
  	puts @activities
  end

  def activity
  end
end
