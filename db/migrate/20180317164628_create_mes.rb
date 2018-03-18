class CreateMes < ActiveRecord::Migration[5.1]
  def change
    create_table :mes do |t|
      t.string :name
      t.string :post

      t.timestamps
    end
  end
end
