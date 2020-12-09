meal-planner => where git repo is initialized
    README.md => hold instructions for app 
    meal-planner-api => use a rails g to make this directory
    meal-planner-client
        index.html => the single page of our app, loads all of our js that interects with api 
        src    
            index.js => top level js file (where the js starts running)
            appAdapter.js => responsible for making all fetch requests
            appContainer.js => binds event listeners, has different functionalities and code that renders into the DOM
            meal.js 
            food.js
            mealplan.js


3 AJAX Requests:
1. get /foods => READ(crud)
2. delete /foods/:id => DELETE(crud)
3. create /foods => CREATE(crud)


INSTRUCTIONS ON HOW TO USE APP
1. cd into the backend('cd meal-planner-api) directory
2. Run bundle
3. Run rails s
4. Either right click the index.html file to open in browser, or cd into the frontend('cd meal-planner-client) directory and use bash to run the frontend.
5. you can also run "python -m SimpleHTTPServer" in your terminal and open 'localhost:8000' in your browser.



