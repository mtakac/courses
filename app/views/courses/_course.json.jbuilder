json.id course.id
json.title course.title
json.description course.description
json.author course.author
json.chapters course.chapters, partial: 'chapters/chapter', as: :chapter, locals: { course: course }
