class AddBreedIdToFavorites < ActiveRecord::Migration[6.0]
  def change
    add_column :favorites, :breed_id, :integer
  end
end
