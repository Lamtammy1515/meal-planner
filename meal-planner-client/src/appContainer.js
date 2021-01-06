 class AppContainer {
    static foods = [];
    static meals = [];
    url = "http://localhost:3000";
    static mealPlan = {};

    //ADD EVENT LISTENERS
    bindEventListeners() {
        const btn = document.getElementById('createMealPlan');
        btn.addEventListener('click', () => MealPlan.generateMealPlan())

        const btnn = document.getElementById('selectMealPlan')
        btnn.addEventListener('click', () => SelectMeal.renderSelectedMealPlan())

        const newFoodForm = document.getElementById('newFood');
        newFoodForm.addEventListener('submit', () => AppAdapter.createFood(event));
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
            }
        })
    }

}