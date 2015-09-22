var rootUrl = 'http://localhost:3000';

window.VideoCoursesApi = {
	get: function(url) {
		return fetch(rootUrl + url)
		.then(function(response) {
			return response.json();
		})
	}
};
