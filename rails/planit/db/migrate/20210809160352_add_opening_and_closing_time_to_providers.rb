class AddOpeningAndClosingTimeToProviders < ActiveRecord::Migration[6.1]
  def change
    add_column :providers, :opening_time, :string
    add_column :providers, :closing_time, :string
  end
end
