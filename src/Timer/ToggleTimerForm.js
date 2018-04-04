import React from 'react';
import TimerForm from './TimerForm';
import styled from 'styled-components';
import { grays } from '../basics/colors';

const Button = styled.button`
	border: none;
	border-radius: 0.4rem;
	padding: 1rem 2rem;
	font-size: 2.5rem;
	font-weight: 600;
	background-color: ${grays.lightGray};
	color: ${grays.mediumGray};
	display: block;
	margin: 0 auto;
	margin-bottom: 5rem;
`;

class ToggleTimerForm extends React.Component {
	state = {
		isOpen: false,
	};

	handleFormOpen = () => {
		this.setState({ isOpen: true });
	};

	handleFormClose = () => {
		this.setState({ isOpen: false });
	};

	handleFormSubmit = timer => {
		this.props.onFormSubmit(timer);
		this.setState({ isOpen: false });
	};

	render() {
		if (this.state.isOpen) {
			return (
				<TimerForm
					onFormSubmit={this.handleFormSubmit}
					onFormClose={this.handleFOrmCLose}
				/>
			);
		} else {
			return (
				<div>
					<Button onClick={this.handleFormOpen}>+</Button>
				</div>
			);
		}
	}
}

export default ToggleTimerForm;

// practice callbacks
// reduce function
const array = [1, 2, 3];
const reduce = (arr, callback, initial = {}) => {
	let reducer = initial;
	for (let i = 0; i < arr.length; i++) {
		reducer = callback(reducer, arr[i]);
	}
	return reducer;
};

const t = reduce(array, (acc, cur) => {
	acc[cur] = cur * 3;
	return acc;
});

console.log(t);
