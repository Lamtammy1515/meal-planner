class AppListener {
   static createMealPlanListener() {
        const btn = document.getElementById('createMealPlan');
        btn.addEventListener('click', () => AppContainer.generateMealPlan())
    }

   static createFoodListener() {
        const  newFoodForm = document.getElementById('newFood');
        newFoodForm.addEventListener('submit', () => AppAdapter.createFood(event));
    }
}