import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { injectGlobal } from 'styled-components';
import { grays } from './basics/colors';

injectGlobal`
	html {
		font-size: 62.5%;
	}

	body {
		font-size: 100%;
		font-family: 'basic-sans', 'sans-serif';
		box-sizing: border-box;
		line-height: 1.3;
		color: ${grays.mediumGray};
	}

	*,
	*::before,
	*::after {
		margin: 0;
		padding: 0;
		box-sizing: inherit;
	}
`;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
