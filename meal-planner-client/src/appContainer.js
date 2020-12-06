 class AppContainer{
    static foods = []
    meals = []
    url = "http://localhost:3000"
    mealPlan = {} 

    bindEventListeners() {
        const btn = document.getElementById('createMealPlan');
        btn.addEventListener('click', this.getRandomFoods)
    };

    getMealPlan() {
        this.getMealPlan();
    }

    getRandomFoods() {
        debugger
        let randomFoods = [];
        for (let i = 0; i < 4; i++){
            //TODO: change this random algorithm to selevt a foods for each meal rather than across all meals
            randomFoods.push(AppContainer.foods[Math.floor(Math.random()*AppContainer.foods.length)]);
        };
        //instantiate a MealPlan instance with these foods
       return randomFoods;
        
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
     
    };
    renderFoods(){
        //create DOM nodes and insert data into them to render in the DOM 
        const breakfastSelect = document.getElementById('breakfast');
        const lunchSelect = document.getElementById('lunch');
        const dinnerSelect = document.getElementById('dinner');
        AppContainer.foods.forEach(food => {
            const option = document.createElement('option');
            option.innerText = food.entree;
//where we append it will be conditional based on what 

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
    };
 }


