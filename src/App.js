import { Route, Switch } from 'react-router-dom';

import Footer from './components/commoon/Footer';
import Header from './components/commoon/Header';
import Banner from './components/main/Banner';
import Faq from './components/main/Faq';
import Gallery from './components/main/Gallery';
import Rank from './components/main/Rank';
import Tab from './components/main/Tab';
import Top from './components/main/Top';
import Visual from './components/main/Visual';
import About from './components/sub/About';
import Community from './components/sub/Community';
import Facilities from './components/sub/Facilities';
import Join from './components/sub/Join';
import Location from './components/sub/Location';
import Rooms from './components/sub/Rooms';
import Video from './components/sub/Video';

import './scss/style.scss';

function App() {
	return (
		<>
			<Switch>
				<Route exact path='/'>
					<Header />
					<Visual />
					<Top />
					<Rank />
					<Gallery />
					<Banner />
					<Tab />
					<Faq />
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
