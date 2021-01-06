class MealsController < ApplicationController
    def create 
        meal = Meal.create(meal: params[:meal])
    end 
end
