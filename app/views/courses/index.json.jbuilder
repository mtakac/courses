json.collection do
  json.partial! 'courses/course', collection: @courses, as: :course
end
