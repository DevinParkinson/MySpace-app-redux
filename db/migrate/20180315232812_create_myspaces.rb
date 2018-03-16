class CreateMyspaces < ActiveRecord::Migration[5.1]
  def change
    create_table :myspaces do |t|
      t.string :name
      t.string :post
      t.string :age
      t.string :occupation
      t.string :location
      t.string :avatar

      t.timestamps
    end
  end
end
