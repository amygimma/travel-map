class CreateTrips < ActiveRecord::Migration
  def change
    create_table :trips do |t|
      t.string :title
      t.string :summary
      t.timestamps null: false
    end
  end
end
