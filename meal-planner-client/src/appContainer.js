 class AppContainer{
    static foods = [];
    ////meals = [];
    static meals = [];
    url = "http://localhost:3000";
    static mealPlan = {};

    bindEventListeners() {
        const btn = document.getElementById('createMealPlan');
        btn.addEventListener('click', () => this.getRandomFoods())

        const  newFoodForm = document.getElementById('newFood');
        newFoodForm.addEventListener('submit', () => this.createFood(event));
    }

    createFood(event) {
        event.preventDefault();
        //maybe use object destructuring to be more dry
        const data = event.target;
        // this => instace of app container if we bind the app instance execution context when we pass in the callback function as argument to the event listener
        console.log(this)
        fetch(`${this.url}/foods`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                entree: data.food.value,
                meal: data.children[2].value   //probably refactor this to be more abstract
            })
        })
        .then(response => response.json())
        .then(data => {
           const { id, entree, meal } = data;
           new Food(id, entree, meal)
            this.renderFoods();
        })
        .catch(err => console.log(err));
    }

    getRandomFoods() {
        let randomFoods = [];

        ////////////////////////////////////////////////
       // AppContainer.meals.forEach(food => {
       //     randomFoods.push(Food.byMeal(meal.meal)[Math.floor(Math.random()*Food.byMeal(meal.meal).length)])
      //  });
        //////////////////////////////////////////


        ///////////////////////
        for (let i = 0; i < 3; i++) {
            //TODO: change this random algo to select a food for each meal rather than across all meals
        randomFoods.push(AppContainer.foods[Math.floor(Math.random()*AppContainer.foods.length)]);
        };
        ///////////////////////////



       // instantiate a mealplan instance with the foods
       new MealPlan(randomFoods);
       // insert data into DOM 
       const mealPlanDiv = document.getElementById('mealPlan');
       AppContainer.mealPlan.foods.forEach(mealPlan => {
           const foodDiv = document.createElement('div');
           foodDiv.innerText = mealPlan.entree;
           mealPlanDiv.appendChild(foodDiv);
       })
       

       randomFoods.forEach(food => {
           fetch(`${this.url}/foods/${food.id}`, {
               method: 'DELETE'
           })
           .then(response => response.json())
           .then(data => console.log(data))
           .catch(err => alert(err))
       })
       
    }

    //renderMealPlan() {

    //}

    getFoods(){
        //make a fetch request to /foods
        fetch(this.url + '/foods')
        .then(response => response.json())
         //populate the foods & meals property with the returned data
        .then(data => {
            console.log(data)
            data.forEach(food => {
                new Food(food.id, food.entree, food.meal)
                ////////////////////////////////////
                //if (!AppContainer.meals.map(meal => meal.meal).includes(food.meal.meal)) {
                //    new Meal(food.meal.meal)
               // } 
                /////////////////////////////////////////
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