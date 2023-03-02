import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Footer from './components/commoon/Footer';
import Header from './components/commoon/Header';
import Main from './components/main/Main';
import About from './components/sub/About';
import Community from './components/sub/Community';
import Facilities from './components/sub/Facilities';
import Join from './components/sub/Join';
import Location from './components/sub/Location';
import Rooms from './components/sub/Rooms';
import Video from './components/sub/Video';
import * as types from './redux/actionType';
import './scss/style.scss';

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch({ type: types.VIDEO.start });
		dispatch({ type: types.FLICKER.start, opt: { type: 'BANQUET' } });
	}, [dispatch]);
	return (
		<>
			<Switch>
				<Route exact path='/'>
					<Main />
				</Route>

				<Route path='/'>
					<Header />
				</Route>
			</Switch>
			<Route path='/about'>
				<About />
			</Route>

			<Route path='/video'>
				<Video />
			</Route>

			<Route path='/location'>
				<Location />
			</Route>

			<Route path='/rooms'>
				<Rooms />
			</Route>

			<Route path='/facilities'>
				<Facilities />
			</Route>

			<Route path='/community'>
				<Community />
			</Route>

			<Route path='/join'>
				<Join />
			</Route>

			<Footer />
		</>
	);
}

export default App;
