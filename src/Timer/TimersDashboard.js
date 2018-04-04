import React from 'react';
import uuid from 'uuid';
import EditableTimerList from './EditableTimerList';
import ToggleTimerForm from './ToggleTimerForm';
import { newTimer } from '../helpers/helpers';

class TimersDashboard extends React.Component {
	state = {
		timers: [
			{
				title: 'Mow the lawn',
				project: 'House Chores',
				elapsed: 5456099,
				id: uuid(),
			},
			{
				title: 'Clear paper jam',
				project: 'Office Chores',
				elapsed: 1273998,
				id: uuid(),
			},
			{
				title: 'Ponder origins of universe',
				project: 'Life Chores',
				id: uuid(),
				elapsed: 11750,
				runningSince: 1456225941911,
			},
		],
	};

	handleCreateFormSubmit = timer => {
		this.createTimer(timer);
	};

	createTimer = timer => {
		const t = newTimer(timer);
		this.setState({
			timers: this.state.timers.concat(t),
		});
	};

	handleEditFormSubmit = attrs => {
		this.updateTimer(attrs);
	};

	updateTimer = attrs => {
		this.setState({
			timers: this.state.timers.map(timer => {
				if (timer.id === attrs.id) {
					return { ...timer, title: attrs.title, project: attrs.project };
				} else {
					return timer;
				}
			}),
		});
	};

	handleTrashClick = timerId => {
		this.deleteTimer(timerId);
	};

	deleteTimer = timerId => {
		this.setState({
			timers: this.state.timers.filter(t => t.id !== timerId),
		});
	};

	handleStartClick = timerId => {
		this.startTimer(timerId);
	};

	startTimer = timerId => {
		const now = Date.now();

		this.setState({
			timers: this.state.timers.map(timer => {
				if (timer.id === timerId) {
					return { ...timer, runningSince: now };
				} else {
					return timer;
				}
			}),
		});
	};

	handleStopClick = timerId => {
		this.stopTimer(timerId);
	};

	stopTimer = timerId => {
		const now = Date.now();

		this.setState({
			timers: this.state.timers.map(timer => {
				if (timer.id === timerId) {
					const lastElapsed = now - timer.runningSince;
					return {
						...timer,
						elapsed: timer.elapsed + lastElapsed,
						runningSince: null,
					};
				} else {
					return timer;
				}
			}),
		});
	};

	render() {
		return (
			<div>
				<EditableTimerList
					timers={this.state.timers}
					onFormSubmit={this.handleEditFormSubmit}
					onTrashClick={this.handleTrashClick}
					onStartClick={this.handleStartClick}
					onStopClick={this.handleStopClick}
				/>
				<ToggleTimerForm onFormSubmit={this.handleCreateFormSubmit} />
			</div>
		);
	}
}

export default TimersDashboard;

// Single responsability principle
