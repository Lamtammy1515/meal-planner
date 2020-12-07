 class AppContainer{
    static foods = [];
    meals = [];
    url = "http://localhost:3000";
    static mealPlan = {};

    bindEventListeners() {
        const btn = document.getElementById('createMealPlan');
        btn.addEventListener('click', this.getRandomFoods)
    }


    getRandomFoods() {
        let randomFoods = [];
        for (let i = 0; i < 3; i++) {
            //TODO: change this random algo to select a food for each meal rather than across all meals
        randomFoods.push(AppContainer.foods[Math.floor(Math.random()*AppContainer.foods.length)]);
        };
       // instantiate a mealplan instance with the foods
       new MealPlan(randomFoods);
       // insert data into DOM 
       const mealPlanDiv = document.getElementById('mealPlan');
       AppContainer.mealPlan.foods.forEach(mealPlan => {
           const foodDiv = document.createElement('div');
           foodDiv.innerText = mealPlan.entree;
           mealPlanDiv.appendChild(foodDiv);
       })
       
    }

    renderMealPlan() {

    }

    getFoods(){
        //make a fetch request to /foods
        fetch(this.url + '/foods')
        .then(response => response.json())
         //populate the foods & meals property with the returned data
        .then(data => {
            console.log(data)
            data.forEach(food => {
                new Food(food.entree, food.meal)
            });
                   //call renderFoods
                   this.renderFoods();
        })
        .catch(err => alert(err));
    }


    renderFoods() {
        //create DOM nodes and insert data into them to render in the DOM 
        const breakfastSelect = document.getElementById('breakfast');
        const lunchSelect = document.getElementById('lunch');
        const dinnerSelect = document.getElementById('dinner');
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