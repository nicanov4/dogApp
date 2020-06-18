class PhotosController < ApplicationController

  respond_to :json
  before_action :find_photo_by_id, only: [:destroy]
  
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

  def destroy
    @photo.image.purge
    respond_with @photo.destroy
  end
  
  private
  def photo_params
    params.require(:photo)
  end

  def find_photo_by_id
    @photo = Photo.find(params[:id])
  end
  
end
