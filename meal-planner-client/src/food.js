class Food { 
    constructor(id, entree, meal) {
        this.entree = entree;
        this.meal = meal;
        this.id = id;
        AppContainer.foods.push(this);
        
    }

    static delete(foodId) {
      AppContainer.foods = AppContainer.foods.filter(food => parseInt(foodId) !== food.id);

    }
    
  static byMeal(mealMeal) {
      return AppContainer.foods.filter(food => food.meal.meal === mealMeal)
    }
}



//store which meal food instance belongs to ? 