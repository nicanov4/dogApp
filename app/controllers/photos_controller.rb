class PhotosController < ApplicationController

  respond_to :json
   
  def index
    @photos = Photo.where(user_id: current_user.id).with_attached_image
    respond_with @photos
  end
  
  def create
    @p = Photo.new()
    @p.user_id = current_user.id
    @p.save
    @p.image.attach(params[:photo][:image])
    respond_with @p
  end

  private
  def photo_params
    params.require(:photo)
  end
  
end
