// Course detail component, responsible for course detail view state and
// for requiring all other parts and components needed to render the course detail
// view

//= require ./chapter

var CourseDetail = React.createClass({
	// START React methods
	mixins: [
		Reflux.listenTo(CourseStore, 'onChange'),
	],

	getInitialState: function() {
		return {
			course: {},
			chapters: []
		};
	},

	componentWillMount: function() {
		Actions.getCourse(this.props.params.courseId);
	},

	componentWillReceiveProps: function(nextProps) {
		Actions.getCourse(nextProps.params.courseId);
	},
	// END React methods

	// Our costum method
	onChange: function() {
		this.setState({
			course: CourseStore.course,
			chapters: CourseStore.chapters
		});
	},

	// Mandatory render method - every React component needs to have one
	render: function() {
		return (
			<div className="course-detail">
				<div className="row">
					<div className="col-sm-12">
						<h1 className="course-title">
							{this.state.course.title}
						</h1>
						<h4>by {this.state.course.author}</h4>
						<hr />
					</div>
				</div>
				{React.cloneElement(this.props.children, { chapters: this.state.chapters })}
			</div>
		);
	}

});
