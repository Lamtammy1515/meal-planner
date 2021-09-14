const breakfastSelect = document.getElementById('breakfast');
const lunchSelect = document.getElementById('lunch');
const dinnerSelect = document.getElementById('dinner');
const app =  new AppContainer; 
AppAdapter.getFoods();
app.bindEventListeners();

