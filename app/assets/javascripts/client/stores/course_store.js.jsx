var CourseStore = Reflux.createStore({

	listenables: [Actions],

	getCourse: function(courseId) {
		return VideoCoursesApi.get('/courses/' + courseId + '.json')
			.then(function(response) {
				this.course = response;
				this.chapters = response.chapters
				console.log(response)
				this.triggerChange();
			}.bind(this));
	},

	triggerChange: function() {
		this.trigger('change', this.course);
	}

});
