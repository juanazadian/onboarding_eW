class AddAddressToProviders < ActiveRecord::Migration[6.1]
  def change
    add_column :providers, :address, :string
  end
end
