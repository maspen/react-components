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
			<div id="grocery-list">
				<div>{this.state.groceries[0]}</div>
				<div>{this.state.groceries[1]}</div>
			</div>
		);
	}
}
// <div id="app"></div>
ReactDOM.render(
  <GroceryList />,
  document.getElementById('app')
);
