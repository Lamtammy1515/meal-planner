class FoodsController < ApplicationController
    def index 
        render :json => Food.all, :include => :meal, :statis => 200
    end

    def create
        meal = Meal.find_by(meal: params[:meal].downcase) 
        food = Food.create(entree: params[:entree], meal: meal)
        render :json => food, :include => :meal, :status => 201
    end 

    def destroy 
        food = Food.find(params[:id])
        #is this the correct status code? 
        render :json => {id: params[:id], message: "Record was successfully deleted"}, :status => 200
        #tap into sqlit3 exceptions that are raised and create a custom error message
   end 

end
