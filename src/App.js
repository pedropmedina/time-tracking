import React, { Component } from 'react';
import Layout from './Layout/Layout';
import TimersDashboard from './Timer/TimersDashboard';

class App extends Component {
	render() {
		return (
			<Layout>
				<TimersDashboard />
			</Layout>
		);
	}
}

export default App;
