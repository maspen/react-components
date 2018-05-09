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

class GroceryList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			groceries: [
				'bananas',
				'beer'
			]
		};
	}

	render() {
		return (
		
			// <div id="grocery-list">
			// 	<div>{this.state.groceries[0]}</div>
			// 	<div>{this.state.groceries[1]}</div>
			// </div>
		
			<div id="grocery-list">
				<Bananas 
					name={this.state.groceries[0]}
				/>
				<Beer 
					name={this.state.groceries[1]}
				/>
			</div>		
		);
	}
}

ReactDOM.render(
  <GroceryList />,
  document.getElementById('app')
);
