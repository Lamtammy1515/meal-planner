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

 //RETRIEVING 1 RANDOM FOOD ENTREE FROM EACH MEAL
  static generateRandomFoods(){
      let randomFoods = [];
      AppContainer.meals.forEach(meal => {      
          randomFoods.push(Food.byMeal(meal.meal)[Math.floor(Math.random()*Food.byMeal(meal.meal).length)])
      });
      return randomFoods;
  }
}
