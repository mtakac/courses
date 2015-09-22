//= require ./components/course_detail

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;

var Routes = (
	<Router>
    <Route path="/courses/:courseId/" component={CourseDetail}>
    	<Route path="chapters/:chapterId" component={Chapter} />
    </Route>
  </Router>
);

React.render(Routes, document.getElementById('content'));
