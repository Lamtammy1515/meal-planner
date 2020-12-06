class Food { 
    constructor(entree, meal) {
        this.entree = entree;
        this.meal = meal;
        AppContainer.foods.push(this);
    
    }

}

//store which meal food instance belongs to ? 