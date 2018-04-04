import React from 'react';
import styled from 'styled-components';
import { grays, greens, reds } from '../basics/colors';

const Wrapper = styled.div`
	padding: 2rem;
	background-color: ${grays.lightGray};
	margin-bottom: 1rem;
	font-size: 1.3rem;
	width: 25rem;
	border-radius: 0.4rem;
`;

const Form = styled.div`
	> * {
		display: block;
	}

	> input {
		height: 3rem;
		color: ${grays.mediumGray};
		margin-bottom: 1rem;
		margin-top: 0.5rem;
		width: 100%;
		text-indent: 0.5rem;
		border-radius: 0.4rem;
		border: none;
	}

	> label {
		font-weight: 700;
	}
`;

const Buttons = styled.div`
	display: flex;

	> button {
		flex: 1;
		padding: 1rem 2rem;
		/* outline: none; */
		background-color: ${grays.lightGray};
		margin: 0.2rem;
	}
`;

const BtnCreate = styled.button`
	border-radius: 0.4rem;
	border: 0.2rem solid ${greens.mediumGreen};
`;

const BtnCancel = BtnCreate.extend`
	border: 0.2rem solid ${reds.mediumRed};
`;

class TimerForm extends React.Component {
	state = {
		title: this.props.title || '',
		project: this.props.title || '',
	};

	handleTitleChange = e => {
		this.setState({ title: e.target.value });
	};

	handleProjectChange = e => {
		this.setState({ project: e.target.value });
	};

	handleSubmit = () => {
		this.props.onFormSubmit({
			id: this.props.id,
			title: this.state.title,
			project: this.state.project,
		});
	};

	render() {
		const submitText = this.props.id ? 'Update' : 'Create';
		return (
			<Wrapper>
				<Form>
					<label htmlFor="">Title</label>
					<input
						type="text"
						value={this.state.title}
						onChange={this.handleTitleChange}
					/>
				</Form>

				<Form>
					<label htmlFor="">Project</label>
					<input
						type="text"
						value={this.state.project}
						onChange={this.handleProjectChange}
					/>
				</Form>

				<Buttons>
					<BtnCreate onClick={this.handleSubmit}>{submitText}</BtnCreate>
					<BtnCancel onClick={this.props.onFormClose}>Cancel</BtnCancel>
				</Buttons>
			</Wrapper>
		);
	}
}

export default TimerForm;
