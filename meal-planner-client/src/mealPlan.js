class MealPlan {
    constructor(foods) {
        this.foods = foods;
        this.renderMealPlan();
    }

    //retrieving three random foods, deleting them, and populating them in the DOM
    static generateMealPlan() {
         //generate random foods
         const randomFoods = AppContainer.generateRandomFoods();

        // instantiate a mealplan instance with the food entrees
        new MealPlan(randomFoods);
        
        // make fetch request to delete foods from db (IT'S TRIGGERING IT)
        AppAdapter.deleteFoods(randomFoods);
        }
        
        
    // ADD MEAL PLAN TO DOM
    renderMealPlan(){
        const mealPlanDiv = document.getElementById('mealPlan');
        mealPlanDiv.innerHTML = "";
        this.foods.forEach(mealPlan => {
            const foodDiv = document.createElement('div');
            foodDiv.innerText = mealPlan.entree;
            mealPlanDiv.appendChild(foodDiv);
        })
    }



}