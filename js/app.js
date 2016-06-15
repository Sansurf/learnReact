var my_news = [
	{
		author: "Author1",
		text: "Text of Author1",
		bigText: "Big Text of Author1"
	},
	{
		author: "Author2",
		text: "Text of Author2",
		bigText: "Big Text of Author2"
	},
	{
		author: "Author3",
		text: "Text of Author3",
		bigText: "Big Text of Author3"
	}
];

var Article = React.createClass({
	propTypes: {
		data: React.PropTypes.shape ({
			author: React.PropTypes.string.isRequired,
			text: React.PropTypes.string.isRequired,
			bigText: React.PropTypes.string.isRequired
		})
	},

	getInitialState: function() {
		return {
			visible: false
		};
	},

	readMoreClick: function(e) {
		e.preventDefault();
		this.setState({visible: true});
	},

	render: function() {
		var author = this.props.data.author,
			text = this.props.data.text,
			bigText = this.props.data.bigText,
			visible = this.state.visible;

		return (
			<div className="article">
				<p className="news_author">{author}</p>
				<p className="news_text">{text}</p>

			{/*Показывать ссылку, если visible === false*/}
				<a href="#" 
					onClick={this.readMoreClick} 
					className={"news_readmore " + (visible ? "none" : '')}>
					Подробнее
				</a>

			{/*Не показывать bigText, если visible === true и ссылка видна*/}
				<p className={"news_bigtext " + (visible ? '' : "none")}>{bigText}</p>
			</div>
		)
	}
});

var News = React.createClass({
	propTypes: {
		data: React.PropTypes.array.isRequired
	},

	render: function() {
		var data = this.props.data,
			newsTemplate;

		if (data.length !== 0) {
			 newsTemplate = data.map(function(item, index) {
				return (
					<div key={index}>
						<Article data={item} />
					</div>
				)
			})
		} else {
			newsTemplate = <p>К сожалению новостей нет</p> 
		}

		return (
			<div className="news">
				{newsTemplate}
				<strong className={'news_count ' + (data.length == 0? 'none' : '')}>
					Количество новостей: {data.length}
				</strong>
			</div>
		);
	}
});

var App = React.createClass({
	render: function() {
		return (
			<div className="app">
				<h3>Новости</h3>
				<News data = {my_news} /> {/*Добавили свойство data*/}
			</div>
		);
	}
});

ReactDOM.render(
	<App />,
	document.getElementById('root')
);
