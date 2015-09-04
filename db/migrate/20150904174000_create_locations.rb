class CreateLocations < ActiveRecord::Migration
  def change
    create_table :locations do |t|
      t.references :trip
      t.string :name
      t.string :blog_url
      t.integer :latitude
      t.integer :longitude
      t.timestamps null: false
    end
  end
end
