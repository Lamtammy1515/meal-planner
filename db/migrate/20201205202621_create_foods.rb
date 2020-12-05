class CreateFoods < ActiveRecord::Migration[6.0]
  def change
    create_table :foods do |t|
      t.string :entree
      t.integer :meal_id

      t.timestamps
    end
  end
end
