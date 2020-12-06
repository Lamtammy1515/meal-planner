 class AppContainer{
    foods = []
    meals = []
    url = "http://localhost:3000"
    mealPlan = {} 

    getFoods(){
        //make a fetch request to /foods
        console.log('something')
        fetch(this.url + '/foods')
        .then(response => response.json())
        .then(data => console.log(data))
        //populate the foods & meals property with the returned data
        //call renderFoods
        .catch(err => alert(err))
    }
    renderFoods(){
        //create DOM nodes and insert data into them to render in the DOM 
    }
 }


