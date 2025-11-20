class CreateSheets < ActiveRecord::Migration[7.1]
  def change
    create_table :sheets do |t|
      t.string :name
      t.text :description
      t.json :details
      t.integer :strength
      t.integer :intelligence
      t.integer :dexterity
      t.integer :constitution
      t.integer :wisdom
      t.integer :charisma

      t.timestamps
    end
  end
end

