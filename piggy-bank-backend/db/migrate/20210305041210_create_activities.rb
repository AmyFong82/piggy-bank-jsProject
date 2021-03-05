class CreateActivities < ActiveRecord::Migration[6.1]
  def change
    create_table :activities do |t|
      t.date :date
      t.decimal :amount
      t.string :remarks
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
