import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './App';
import videoReducer from './redux/videoSlice';
const store = configureStore({
	reducer: {
		video: videoReducer,
	},
});

ReactDOM.render(
	<React.StrictMode>
		<HashRouter>
			<Provider store={store}>
				<App />
			</Provider>
		</HashRouter>
	</React.StrictMode>,

	document.getElementById('root')
);
