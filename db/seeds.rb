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
Food.create(entree: "Chowder", meal: lunch)
Food.create(entree: "Enchiladas", meal: dinner)
Food.create(entree: "Waffles", meal: breakfast)
Food.create(entree: "Jambalaya", meal: lunch)
Food.create(entree: "Lobster", meal: dinner)
Food.create(entree: "Quesadilla", meal: breakfast)
Food.create(entree: "Pot Roast", meal: dinner)
Food.create(entree: "Jerky", meal: lunch)
Food.create(entree: "Cornbread", meal: breakfast)
Food.create(entree: "Clams", meal: dinner)
Food.create(entree: "Biscuits 'n' gravy", meal: breakfast)
Food.create(entree: "Chicken fried steak", meal: breakfast)
Food.create(entree: "Sushi", meal: lunch)
Food.create(entree: "Grits", meal: breakfast)
Food.create(entree: "Cioppino", meal: dinner)
Food.create(entree: "Peanut butter sandwich", meal: breakfast)



