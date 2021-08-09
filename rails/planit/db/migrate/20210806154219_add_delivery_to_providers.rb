class AddDeliveryToProviders < ActiveRecord::Migration[6.1]
  def change
    add_column :providers, :delivery, :boolean
  end
end
