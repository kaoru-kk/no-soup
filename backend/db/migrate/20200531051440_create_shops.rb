class CreateShops < ActiveRecord::Migration[5.2]
  def change
    create_table :shops do |t|
      t.string :shop_name
      t.string :address_number
      t.string :prefecture
      t.string :city
      t.string :block
      t.string :building

      t.timestamps
    end
  end
end
