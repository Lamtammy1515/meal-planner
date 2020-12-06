# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Meal.destroy_all
Food.destroy_all

breakfast = Meal.create(meal: "breakfast")
lunch = Meal.create(meal: "lunch")
dinner = Meal.create(meal: "dinner")

Food.create(entree: "Lasagna", meal: dinner)
Food.create(entree: "Spaghetti", meal: dinner)
Food.create(entree: "Omelette", meal: breakfast)
Food.create(entree: "Cheeseburger", meal: lunch)
Food.create(entree: "Hamburger", meal: lunch)
Food.create(entree: "Salad", meal: lunch)


