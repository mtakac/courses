json.collection do
  json.partial! 'chapters/chapter', collection: @chapters, as: :chapter, course: @course
end
