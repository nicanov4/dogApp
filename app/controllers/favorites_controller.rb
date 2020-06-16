class FavoritesController < ApplicationController

  respond_to :json
  before_action :find_favorite_by_id, only: [:destroy]
  before_action :find_favorite_by_breed, only: [:show]
  
  def index
    @favorites = Favorite.where(user_id: current_user.id)
    respond_with @favorites
  end

  def show
    respond_with @fav.first
  end
  
  def create
    @f = Favorite.new(favorite_params)
    @f.user_id = current_user.id
    @f.save
    respond_with @f 
  end

  def destroy
    respond_with @favorite.destroy
  end

  private
  def favorite_params
    params.require(:favorite).permit(:breed)
  end

  def find_favorite_by_breed
    @fav = Favorite.where(user_id: current_user.id, breed: params[:id])
  end

  def find_favorite_by_id
    @favorite = Favorite.find(params[:id])     
  end

end
