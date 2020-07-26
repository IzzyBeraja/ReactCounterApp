import React, { Component } from "react";

class Counter extends Component {
	render() {
        const { onIncrement, counter, onDelete } = this.props;
		return (
			<div>
				<span className={this.getBadgeClasses()}>
					{this.formatCount()}
				</span>
				<button
                    onClick={() => onIncrement(counter)}
					className="btn btn-secondary btn-sm">
					Increment
				</button>
				<button
					onClick={() => onDelete(counter)}
					className="btn btn-danger btn-sm m-2">
					Delete
				</button>
			</div>
		);
	}

	getBadgeClasses() {
        return "badge m-2 " + (this.props.counter.value === 0 ? "badge-warning" : "badge-primary");
	}

	formatCount() {
		const { value } = this.props.counter;
		return value === 0 ? "Zero" : value;
	}
}

export default Counter;
