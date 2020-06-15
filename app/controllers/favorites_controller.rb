class FavoritesController < ApplicationController

  respond_to :json
  before_action :find_favorite_by_id, only: [:show, :destroy]
  
  def index
    @favorites = Favorite.where(user_id: current_user.id)
    respond_with @favorites
  end

  def show
    respond_with @favorite
  end

  def create
    @F = Favorite.new(favorite_params)
    @f.user_id = current_user.id
    @f.save
    respond_with :api, @f 
  end

  def destroy
    respond_with @favorite.destroy
  end

  private
  def favorite_params
    params.require(:favorite).permit(:breed_id)
  end

  def find_favorite_by_id
    @favorite = Favorite.find(params[:id])     
  end

end
