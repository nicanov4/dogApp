json.array! @photos do |photo|
  json.extract! photo, :id, :user_id
  json.image url_for(photo.image)
end
