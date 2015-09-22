var ChapterStore = Reflux.createStore({

	listenables: [Actions],

	getChapter: function(courseId, chapterId) {
		return VideoCoursesApi.get('/courses/' + courseId + '/chapters/' + chapterId + '.json')
			.then(function(response) {
				this.chapter = response;
				console.log(response)
				this.triggerChange();
			}.bind(this));
	},

	triggerChange: function() {
		this.trigger('change', this.chapter);
	}

});
