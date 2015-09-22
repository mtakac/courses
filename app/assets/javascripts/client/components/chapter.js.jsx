//= require ./video
//= require ./chapters_list
//= require ./tabs

var Chapter = React.createClass({

	mixins: [
		Reflux.listenTo(ChapterStore, 'onChange'),
	],

	getInitialState: function() {
		return {
			chapter: {},
		};
	},

	componentWillReceiveProps: function(nextProps) {
		if (!_.isEqual(this.props, nextProps)) {
			Actions.getChapter(nextProps.params.courseId, nextProps.params.chapterId);
		}
	},

	onChange: function() {
		this.setState({
			chapter: ChapterStore.chapter
		});
	},

	nextChapter: function() {
		var nextChapter;

		_.each(this.props.chapters, function(chapter, index) {
			if (this.state.chapter.id === chapter.id) {
				nextChapter = this.props.chapters[index + 1]
			}
		}.bind(this));

		return nextChapter;
	},

	previousChapter: function() {
		var previousChapter;

		_.each(this.props.chapters, function(chapter, index) {
			if (this.state.chapter.id === chapter.id) {
				previousChapter = this.props.chapters[index - 1]
			}
		}.bind(this));

		return previousChapter;
	},

	renderNextChapterLink: function() {
		var nextChapter, url;

		nextChapter = this.nextChapter();

		if (nextChapter) {
			url = '/courses/' + this.props.params.courseId + '/chapters/' + nextChapter.id;
			return (
				<Link to={url}>
					<span className="glyphicon glyphicon-step-forward pull-right"></span>
				</Link>
			);
		}
	},

	renderPreviousChapterLink: function() {
		var previousChapter, url;

		previousChapter = this.previousChapter();

		if (previousChapter) {
			url = '/courses/' + this.props.params.courseId + '/chapters/' + previousChapter.id;
			return (
				<Link to={url}>
					<span className="glyphicon glyphicon-step-backward pull-left"></span>
				</Link>
			);
		}
	},

	render: function() {
		var chaptersTabs = [{
			name: 'Kapitoly',
			content: <ChaptersList chapters={this.props.chapters} currentChapter={this.state.chapter} courseId={this.props.params.courseId} />
		}];

		var descriptionTabs = [{
			name: 'Popis',
			content: this.state.chapter.description,
			renderAsHtml: true
		}, {
			name: 'Diskusia',
			content: 'Diskusia'
		}];

		return (
			<div className="chapter">
				<h2>{this.state.chapter.title}</h2>
				<div className="row">
					<div className="video col-sm-12">
						<Video url={this.state.chapter.video} />
					</div>
				</div>

				<div className="row">
					<div className="video-controls col-sm-12">
						{this.renderPreviousChapterLink()}
						{this.renderNextChapterLink()}
					</div>
				</div>

				<div className="row">
					<div className="col-sm-12">
						<hr />
					</div>
				</div>

				<div className="row">
					<div className="course-chapters-list col-sm-12 col-md-6">
						<Tabs tabs={chaptersTabs} />
					</div>

					<div className="course-chapter-description col-sm-12 col-md-6">
						<Tabs tabs={descriptionTabs} renderAsHtml={true} />
					</div>
				</div>
			</div>

		);
	}

});
