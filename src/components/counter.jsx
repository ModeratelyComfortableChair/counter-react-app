import React, { Component } from "react";

//define a class here
class Counter extends Component {
	//bind method binds 'this' to handleIncrement()
	//constructor() {
	//super();
	//this.handleIncrement = this.handleIncrement.bind(this);
	//}

	//without the bind constructor, this will be undefined
	//handleIncrement() {
	//console.log("Increment Clicked", this);
	//}

	render() {
		const { children, onIncrement, onDelete, counter } = this.props;

		console.log("props", this.props); //props are all attributes (Expect key) for an HTML element

		//what we return to be render in the component
		return (
			//need multiple elements to have one parent element
			//{} braces render values dynamically
			<div>
				{children}
				<span className={this.getBadgeClasses()}>{this.formatCount()}</span>
				<button
					onClick={() => onIncrement(counter)} //how to pass an argument
					className="btn btn-secondary btn-sm m-2"
				>
					Increment
				</button>

				<button
					onClick={() => onDelete(counter.id)} //how to pass an argument
					className="btn btn-danger btn-sm m-2"
				>
					Delete
				</button>
			</div>
		);
	}

	getBadgeClasses() {
		let classes = "badge m-2 badge-";
		classes += this.props.counter.value === 0 ? "warning" : "primary";
		return classes;
	}

	formatCount() {
		const { value } = this.props.counter;
		return value === 0 ? <h1>Zero</h1> : value;
	}
}

//export class here
export default Counter;
