// Main client application file
// Used for requiring top level components, routes (although in real application
// routes would be probably in separate file) and for rendering of the application.

//= require ./components/course_detail

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;

// Routes:
// See `./components/course_details` and `./components/chapter`
// Notice that chapter component is "inside" the course detail component route
// This allows as to have URLs like /courses/:id/chapters/:id
var Routes = (
	<Router>
    <Route path="/courses/:courseId/" component={CourseDetail}>
    	<Route path="chapters/:chapterId" component={Chapter} />
    </Route>
  </Router>
);

// Render the application inside the element with id content
React.render(Routes, document.getElementById('content'));
