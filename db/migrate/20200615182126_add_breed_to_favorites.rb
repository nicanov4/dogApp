class AddBreedToFavorites < ActiveRecord::Migration[6.0]
  def change
    add_column :favorites, :breed, :string
  end
end
