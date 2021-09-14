 class AppContainer {
    static foods = [];
    static meals = [];
    url = "http://localhost:3000";
    static selectMealPlan = [];


    //ADD EVENT LISTENERS
    bindEventListeners() {
        const btn = document.getElementById('createMealPlan');
        btn.addEventListener('click', () => MealPlan.generateMealPlan())

        const btnn = document.getElementById('selectMealPlan')
        btnn.addEventListener('click', () => SelectMeal.renderSelectedMealPlan())

        const newFoodForm = document.getElementById('newFood');
        newFoodForm.addEventListener('submit', () => AppAdapter.createFood(event));

        const color = document.getElementById("changeColor");
        color.addEventListener('click', () => AppContainer.changeColor());
    }


    //FUNCTION PREVENTS SUBMITTING EMPTY "" OR BLANK TO INPUT
    static emptyInput() {
        const input = document.getElementById("input");
        if( input.value.trim() === ""|| input.value.trim() === null) {
            alert("PLEASE ADD IN NEW ENTREE TO SUBMIT.");
            return false;
        }
        else {
            console.log("NEW ENTREE ADDED TO LIST")
            return true;
        }
    }


    //POPULATING DOM WITH FOOD DATA FOR EACH MEAL
    static renderFoods() {
        //create DOM nodes and insert data into them to render in the DOM 
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


    //Changes background to black
    static changeColor() {
       const element = document.querySelector("body")
        element.classList.toggle("change");
    }
}