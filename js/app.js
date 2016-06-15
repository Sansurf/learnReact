var my_news = [
	{
		author: "Author1",
		text: "Text of author1"
	},
	{
		author: "Author2",
		text: "Text of Author2"
	},
	{
		author: "Author3",
		text: "Text of Author3"
	}
];

var Article = React.createClass({
	render: function() {
		var author = this.props.data.author,
			text = this.props.data.text;
		return (
			<div className="article">
				<p className="news_author">{author}</p>
				<p className="news_text">{text}</p>
			</div>
		)
	}
});

var News = React.createClass({
	propTypes: {
		data: React.PropTypes.array.isRequired
	},
	
	render: function() {
		var data = this.props.data;
		var	newsTemplate;
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
				<strong className={'news_count ' + (data.length == 0? 'none' : '')}>Количество новостей: {data.length}</strong>
			</div>
		);
	}
});

var App = React.createClass({
	render: function() {
		return (
			<div className="app">
				<h3>Новости</h3>
				<News data = {my_news} /> {/*Добавили свойство my_news*/}
			</div>
		);
	}
});

ReactDOM.render(
	<App />,
	document.getElementById('root')
);
