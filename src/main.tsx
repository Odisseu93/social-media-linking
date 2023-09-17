import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { GlobalsStyles } from './styles/globals.ts';

import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<GlobalsStyles />
		<App />
	</React.StrictMode>,
);
