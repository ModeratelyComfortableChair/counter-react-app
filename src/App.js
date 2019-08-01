import React, { Component } from "react";
import NavBar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";

class App extends Component {
	//class data that is private to that component
	//invisible to other components
	//props is read only, while state is not
	//Thus any info from props that we want to change must be written to state
	state = {
		counters: [
			{ id: 1, value: 0 },
			{ id: 2, value: 0 },
			{ id: 3, value: 0 },
			{ id: 4, value: 0 }
		]
	};

	constructor() {
		super();
		console.log("App - Constructor");
	}

	//Best place to do Ajax calls to get data from the server
	componentDidMount() {
		console.log("App - Mounted");
	}
	// ... clones and object
	// You should always clone an object from the state
	// modify the cloned object, and then pass it to the
	// state with this.setState({})
	handleIncrement = counter => {
		const counters = [...this.state.counters];
		const index = counters.indexOf(counter);
		counters[index] = { ...counter };
		counters[index].value++;
		this.setState({ counters });
		console.log(this.state.counters[index]);
	};

	handleReset = () => {
		const counters = this.state.counters.map(c => {
			c.value = 0;
			return c;
		});
		this.setState(counters);
	};

	//even though the counter component is calling delete
	//only the component owning a state should edit the state
	handleDelete = id => {
		const counters = this.state.counters.filter(c => c.id !== id);
		this.setState({ counters: counters });
	};

	render() {
		console.log("App - Rendered");
		return (
			<React.Fragment>
				<NavBar
					totalCounters={this.state.counters.filter(c => c.value > 0).length}
				/>
				<main className="container">
					<Counters
						counters={this.state.counters}
						onReset={this.handleReset}
						onIncrement={this.handleIncrement}
						onDelete={this.handleDelete}
					/>
				</main>
			</React.Fragment>
		);
	}
}
export default App;
