import React from 'react';
import styled from 'styled-components';
import { grays } from '../basics/colors';

const Header = styled.header`
	border-bottom: 0.2rem solid ${grays.mediumGray};
	padding: 1rem;
	text-align: center;
	font-size: 3rem;
	text-transform: uppercase;
	letter-spacing: 0.2rem;
`;

const Main = styled.main`
	display: flex;
	justify-content: center;
	margin-top: 5rem;
`;

const Layout = props => {
	return (
		<React.Fragment>
			<Header>Timers</Header>
			<Main>{props.children}</Main>
		</React.Fragment>
	);
};

export default Layout;
