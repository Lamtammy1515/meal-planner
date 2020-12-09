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

            

The application must be an HTML, CSS, and JavaScript frontend with a Rails API backend. All interactions between the client and the server must be handled asynchronously (AJAX) and use JSON as the communication format.

The JavaScript application must use Object Oriented JavaScript (classes) to encapsulate related data and behavior.

The domain model served by the Rails backend must include a resource with at least one has-many relationship. For example, if you were building an Instagram clone, you might display a list of photos with associated comments.

The backend and frontend must collaborate to demonstrate Client-Server Communication. Your application should have at least 3 AJAX calls, covering at least 2 of Create, Read, Update, and Delete (CRUD). Your client-side JavaScript code must use fetch with the appropriate HTTP verb, and your Rails API should use RESTful conventions.

3 AJAX Requests:
1. get /foods => READ(crud)
2. delete /foods/:id => DELETE(crud)
3. create /foods => CREATE(crud)



-cd into the backend('cd meal-planner-api) directory
-Run bundle
-Run rails s
-Either right click the index.html file to open in browser, or cd into the frontend('cd meal-planner-client) directory and use bash to run the frontend.
-you can also run "python -m SimpleHTTPServer" in your terminal and open 'localhost:8000' in your browser.



