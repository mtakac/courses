class CoursesController < ApplicationController
  def index
    @courses = Course.all
  end

  def show
    @course = Course.find(params[:id])

    respond_to do |format|
      format.html
      format.json
    end
  end
end
