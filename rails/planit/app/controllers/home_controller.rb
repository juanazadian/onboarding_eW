class HomeController < ApplicationController
  def index
    @providers = []
    @categories = Category.all
    if params[:category]
      @providers = Provider.where(category_id: params[:category].to_i)
    end
  end
end
