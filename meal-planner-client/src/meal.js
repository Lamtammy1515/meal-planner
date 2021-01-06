class Meal { 
    constructor(meal) {
        this.meal = meal;
        AppContainer.meals.push(this);
    }
}