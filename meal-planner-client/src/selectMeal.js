class SelectMeal { 
    constructor(breakfast, lunch, dinner) {
        this.breakfast = breakfast;
        this.lunch = lunch;
        this.dinner = dinner;
    }

    //INSTANTIATING NEW SELECTED MEALPLAN WITH AN ENTREE FROM EACH MEAL
    static renderSelectedMealPlan() {
        const newMeals = new SelectMeal(breakfastSelect.value, lunchSelect.value, dinnerSelect.value)
        newMeals.renderMeals();
    }

    //RENDERING SELECTED MEALPLAN INTO DOM
    renderMeals() { 
        const mealDiv = document.getElementById('meals')
        mealDiv.innerHTML += `<p>${this.breakfast}</p> <p>${this.lunch}</p> <p>${this.dinner}</p>` 
    }
}