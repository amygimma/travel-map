class CreateLocations < ActiveRecord::Migration
  def change
    create_table :locations do |t|
      t.references :trip
      t.string :name
      t.string :blog_url
      t.float :latitude
      t.float :longitude
      t.timestamps null: false
    end
  end
end
