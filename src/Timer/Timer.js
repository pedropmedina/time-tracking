import React from 'react';
import styled from 'styled-components';
import { renderElapsedString } from '../helpers/helpers';
import { grays } from '../basics/colors';
import TimerActionButton from './TimerActionButton';

const Wrapper = styled.div`
	padding: 2rem;
	background-color: ${grays.lightGray};
	margin-bottom: 1rem;
	border-radius: 0.4rem;
	width: 25rem;
`;

const H2 = styled.h2`
	text-align: center;
	font-size: 2.5rem;
	padding: 1rem;
`;

const Title = styled.div`
	font-size: 1.5rem;
	font-weight: 600;
`;

const Icons = styled.div`
	display: flex;
	justify-content: flex-end;

	> span {
		margin: 0 0.3rem;
		font-size: 1.6rem;
		cursor: pointer;
	}
`;

class Timer extends React.Component {
	handleTrashClick = () => {
		this.props.onTrashClick(this.props.id);
	};

	componentDidMount() {
		this.forceUpdateInterval = setInterval(() => this.forceUpdate(), 50);
	}

	componentWillUnmount() {
		clearInterval(this.forceUpdateInterval);
	}

	handleStartClick = () => {
		this.props.onStartClick(this.props.id);
	};

	handleStopClick = () => {
		this.props.onStopClick(this.props.id);
	};

	render() {
		const elapsedString = renderElapsedString(
			this.props.elapsed,
			this.props.runningSince,
		);
		return (
			<Wrapper>
				<Title>{this.props.title}</Title>
				<div>{this.props.project}</div>
				<H2>{elapsedString}</H2>
				<Icons>
					<span onClick={this.props.onEditClick}>
						<i className="ion-ios-compose" />
					</span>
					<span onClick={this.handleTrashClick}>
						<i className="ion-trash-b" />
					</span>
				</Icons>
				<TimerActionButton
					timerIsRunning={!!this.props.runningSince}
					onStartClick={this.handleStartClick}
					onStopClick={this.handleStopClick}
				/>
			</Wrapper>
		);
	}
}

export default Timer;
