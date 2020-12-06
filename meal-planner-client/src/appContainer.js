 class AppContainer{
    foods = []
    meals = []
    url = "http://localhost:3000"
    mealPlan = {} 

    bindEventListeners() {
        const btn = document.getElementById('createMealPlan');
        btn.addEventListener('click', this.getRandomFoods.bind(this))
    };

    getRandomFoods() {
        let randomFoods = [];
        for (let i = 0; i < 4; i++){
            debugger
            //build this random algorithm to selevt a foods for each meal rather than across all meals
            randomFoods.push(this.foods[Math.floor(Math.random()*this.foods.length)]);
        }
       return randomFoods;
        
    }

    getFoods(){
        //make a fetch request to /foods
        console.log('something');
        fetch(this.url + '/foods')
        .then(response => response.json())
        .then(data => console.log(data))
        //populate the foods & meals property with the returned data
        //call renderFoods
        .catch(err => alert(err));
    };
    renderFoods(){
        //create DOM nodes and insert data into them to render in the DOM 
    };
 }


