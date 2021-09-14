class MealsController < ApplicationController
    def index
        render :json => Meal.all, :statis => 200
    end
    
    def create 
        meal = Meal.create(meal: params[:meal])
    end 
end
