class MealPlan {
    constructor(foods) {
        this.foods = foods;
    }

    //retrieving three random foods, deleting them, and populating them in the DOM
    static generateMealPlan() {
       //  generate random foods
        const randomFoods = Food.generateRandomFoods();
       
        // instantiate a mealplan instance with the food entrees
        const randomMealPlan = new MealPlan(randomFoods);

        // rendering new instantiated instance to DOM
        randomMealPlan.renderMealPlan();

        // make fetch request to delete foods from db (IT'S TRIGGERING IT)
        AppAdapter.deleteFoods(randomFoods);
    };


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