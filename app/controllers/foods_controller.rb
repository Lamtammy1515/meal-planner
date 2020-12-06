class FoodsController < ApplicationController
    def index 
        render :json => Food.all, :include => :meal
    end 
end
