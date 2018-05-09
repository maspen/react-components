class Bananas extends React.Component {
	render() {
		return (
			<div class="bananas">{this.props.name}</div>
		);
	}
}

class Beer extends React.Component {
	render() {
		return (
			<div class="beer">{this.props.name}</div>
		);
	}
}

class GroceryListItem extends React.Component {
	constructor(props) {
    	super(props);
    	this.state = {
  			bold: false
  		};
  	}

  	onListItemClick() {
  		this.setState({
  			bold: !this.state.bold
  		})
  	}

	render() {
		var style = {
      		textDecoration: this.state.bold ? 'line-through' : 'none'
    	};	
		return (
			<div style={style} key={this.props.name} onClick={this.onListItemClick.bind(this)}>{this.props.name}</div>
		);
	}	
}

class GroceryList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			groceries: [
				'bananas',
				'beer',
				'cheese',
				'crackers',
				'soda'
			]
		};
	}

	render() {
		return (
			<div id="grocery-list">
				{this.state.groceries.map(item =>
					<GroceryListItem key={item.toString()} name={item} />
				)}
			</div>
		);
	}
}

ReactDOM.render(
  <GroceryList />,
  document.getElementById('app')
);
