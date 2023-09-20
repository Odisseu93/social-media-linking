import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App.tsx';

import { GlobalsStyles } from './styles/globals.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<GlobalsStyles />
			<App />
		</BrowserRouter>
	</React.StrictMode>
);