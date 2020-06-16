class RemoveBreedIdFromFavorites < ActiveRecord::Migration[6.0]
  def change
    remove_column :favorites, :breed_id, :integer
    
  end
end
