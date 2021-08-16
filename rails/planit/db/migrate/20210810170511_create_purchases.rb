class CreatePurchases < ActiveRecord::Migration[6.1]
  def change
    create_table :purchases do |t|
      t.boolean :delivery
      t.integer :quantity
      t.string :address
      t.string :apartment
      t.date :date
      t.time :start_time
      t.time :end_time
      t.text :comments
      t.string :payment

      t.timestamps
    end
  end
end
