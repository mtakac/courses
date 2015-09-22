var Video = React.createClass({

	render: function() {
		var videoStyles = {
			position: 'relative',
			paddingBottom: '56.25%',
			paddingTop: '25px',
			height: 0
		}

		var iframeStyles = {
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
			height: '100%'
		}

		return (
			<div className="video" style={videoStyles}>
				<iframe
					width="560"
					height="349"
					src={this.props.url}
					frameBorder="0"
					allowFullScreen="true"
					style={iframeStyles}>
				</iframe>
			</div>
		);
	}

});
