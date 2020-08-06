import React, { Component } from "react";

class Counter extends Component {
	render() {
		const { counter, onIncrement, onDecrement, onDelete } = this.props;
		return (
			<div className="row">
				<div className="col-md-1">
					<span className={this.getBadgeClasses()}>{this.formatCount()}</span>
				</div>
				<div className="col-md-auto">
					<button onClick={() => onIncrement(counter)} className="btn btn-secondary btn-sm">
						+
					</button>
					<button
						onClick={() => onDecrement(counter)}
						className="btn btn-secondary btn-sm m-2"
						disabled={this.getDecrementDisabledClass()}>
						-
					</button>
					<button onClick={() => onDelete(counter)} className="btn btn-danger btn-sm">
						x
					</button>
				</div>
			</div>
		);
	}

	getBadgeClasses = () => "badge m-2 " + (this.props.counter.value === 0 ? "badge-warning" : "badge-primary");

	getDecrementDisabledClass = () => this.props.counter.value === 0;

	formatCount() {
		const { value } = this.props.counter;
		return value === 0 ? "Zero" : value;
	}
}

export default Counter;
