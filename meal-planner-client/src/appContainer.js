 class AppContainer{
    static foods = [];
    ////meals = [];
    static meals = [];
    url = "http://localhost:3000";
    static mealPlan = {};

    //ADD EVENT LISTENERS
    bindEventListeners() {
        AppListener.createFoodListener();
        AppListener.createMealPlanListener();
    }

    //retrieving three random foods, deleting them, and populating them in the DOM
   static generateMealPlan() {
        //generate random foods
       const randomFoods = this.generateRandomFoods();
        // instantiate a mealplan instance with the foods
        new MealPlan(randomFoods);

        // make fetch request to delete foods from db (IT'S TRIGGERING IT)
        AppAdapter.deleteFoods(randomFoods);

        // insert data into DOM 
        this.renderMealPlan();
        }


    // RETRIEVING 1 RANDOM FOOD FROM EACH MEAL
   static generateRandomFoods(){
        let randomFoods = [];
        AppContainer.meals.forEach(meal => {
            randomFoods.push(Food.byMeal(meal.meal)[Math.floor(Math.random()*Food.byMeal(meal.meal).length)])
        });
        return randomFoods;
  }
    // ADD MEAL PLAN TO DOM
   static renderMealPlan(){
        const mealPlanDiv = document.getElementById('mealPlan');
        mealPlanDiv.innerHTML = "";
        AppContainer.mealPlan.foods.forEach(mealPlan => {
            const foodDiv = document.createElement('div');
            foodDiv.innerText = mealPlan.entree;
            mealPlanDiv.appendChild(foodDiv);
        })
        }

    //POPULATING DOM WITH FOOD DATA FOR EACH MEAL
    static renderFoods() {
        //create DOM nodes and insert data into them to render in the DOM 
        const breakfastSelect = document.getElementById('breakfast');
        const lunchSelect = document.getElementById('lunch');
        const dinnerSelect = document.getElementById('dinner');
        breakfastSelect.innerHTML = "";
        lunchSelect.innerHTML = "";
        dinnerSelect.innerHTML = "";
        AppContainer.foods.forEach(food => {
            const option = document.createElement('option');
            option.innerText = food.entree;
            // where we append it will be conditional based on what meal it belongs to
            switch(food.meal.meal) {
                
                case "breakfast":
                 breakfastSelect.appendChild(option);
                break;
                case "lunch":
                lunchSelect.appendChild(option);
                break;
                case "dinner":
                dinnerSelect.appendChild(option);
                break;
                default:
                // code block
            }
        })
    }

}