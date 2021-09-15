class AppAdapter {
   static url = "http://localhost:3000";

//READ FOODS 
   static getFoods(){
    //make a fetch request to /foods
    fetch(this.url + '/foods')
    .then(response => response.json())
     //populate the foods & meals property with the returned data
    .then(data => {
        data.forEach(food => {
            new Food(food.id, food.entree, food.meal)
            if (!AppContainer.meals.map(meal => meal.meal).includes(food.meal.meal)) {
                new Meal(food.meal.meal)
            } 
        });
               //call method renderFoods() in AppContainer
               AppContainer.renderFoods();
    })
    .catch(err => alert(err));
}

// Create food [POST REQUEST]
    static createFood(event) {
        event.preventDefault();
        const data = event.target;
        fetch(`${this.url}/foods`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                entree: data.food.value,
                meal: data.children[2].value   
            })
        })
        .then(response => response.json())
        .then(data => {
           const { id, entree, meal } = data;
           new Food(id, entree, meal)
            AppContainer.renderFoods();
        })
        .catch(err => console.log(err));
    }
    
    //delete foods(3) [DELETE REQUEST]

  static deleteFoods(foods) {
       foods.forEach(food => {
           fetch(`${this.url}/foods/${food.id}`, {
               method: 'DELETE'
           })
           .then(response => response.json())
           .then(data => {
               Food.delete(data.id);
               AppContainer.renderFoods();
            })
           .catch(err => alert(err))
       })
       
    }
}



