class CreateTrips < ActiveRecord::Migration
  def change
    create_table :trips do |t|
      t.string :title, null: false
      t.string :summary
      t.timestamps null: false
    end
  end
end
