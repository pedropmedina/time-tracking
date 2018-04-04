import React from 'react';
import styled from 'styled-components';
import { blues } from '../basics/colors';

const Button = styled.button`
	border: none;
	border: 0.2rem solid ${blues.mediumBlue};
	border-radius: 0.3rem;
	width: 100%;
	padding: 1rem 2rem;
	margin-top: 2rem;
	background-color: transparent;
`;

const TimerActionButton = props => {
	if (props.timerIsRunning) {
		return <Button onClick={props.onStopClick}>Stop</Button>;
	} else {
		return <Button onClick={props.onStartClick}>Start</Button>;
	}
};

export default TimerActionButton;
