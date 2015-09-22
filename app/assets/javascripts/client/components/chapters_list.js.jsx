var ChaptersList = React.createClass({

	render: function() {
		var chapters = this.props.chapters.map(function(chapter) {
			var activeClass = (this.props.currentChapter.id === chapter.id) ? 'active' : '';

			return (
				<Link
					to={'/courses/' + this.props.courseId + '/chapters/' + chapter.id}
					className={'list-group-item ' + activeClass}
					key={chapter.id}>
					{chapter.title}
				</Link>
			);
		}.bind(this));

		return (
			<ul className="chapters-list list-group">
				{chapters}
			</ul>
		);
	}

});
