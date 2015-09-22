class ChaptersController < ApplicationController
  def index
    @course = Course.find(params[:course_id])
    @chapters = @course.chapters

    respond_to do |format|
      format.html
      format.json
    end
  end

  def show
    @course = Course.find(params[:course_id])
    @chapter = @course.chapters.find(params[:id])

    respond_to do |format|
      format.html
      format.json
    end
  end
end
