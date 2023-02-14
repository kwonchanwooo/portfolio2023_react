import { Route, Switch } from 'react-router-dom';

import Footer from './components/commoon/Footer';
import Header from './components/commoon/Header';
import Content from './components/main/Content';
import Visual from './components/main/Visual';
import About from './components/sub/About';
import Community from './components/sub/Community';
import Facilities from './components/sub/Facilities';
import Join from './components/sub/Join';
import Location from './components/sub/Location';
import Video from './components/sub/Video';

import './scss/style.scss';

function App() {
	return (
		<>
			<Switch>
				<Route exact path='/'>
					<Header type={'main'} />
					<Visual />
					<Content />
				</Route>

				<Route path='/'>
					<Header type={'sub'} />
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
