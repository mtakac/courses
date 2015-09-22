var Tabs = React.createClass({

	getInitialState: function() {
		return {
			activeTabIndex: 0
		};
	},

	handleClick: function(index, event) {
		event.preventDefault();

		this.setState({
			activeTabIndex: index
		});
	},

	renderTabs: function() {
		return (
			this.props.tabs.map(function(tab, index) {
				var activeClass = (this.state.activeTabIndex === index) ? 'active' : '';
				return (
					<li className={activeClass} key={index}>
						<a href onClick={this.handleClick.bind(this, index)}>{tab.name}</a>
					</li>
				);
			}.bind(this))
		);
	},

	renderText: function() {
		return this.props.tabs[this.state.activeTabIndex].content;
	},

	renderHtml: function() {
		return {__html: this.props.tabs[this.state.activeTabIndex].content};
	},

	renderContent: function() {
		if (this.props.tabs[this.state.activeTabIndex].renderAsHtml) {
			return <div className="tab-pane active" dangerouslySetInnerHTML={this.renderHtml()} />;
		} else {
			return (
				<div className="tab-pane active">
					{this.renderText()}
				</div>
			);
		}
	},

	render: function() {
		return (
			<div className="tabs">
				<ul className="nav nav-tabs">
					{this.renderTabs()}
				</ul>
				<div className="tab-content">
					{this.renderContent()}
				</div>
			</div>
		);
	}

});
