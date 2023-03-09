import React, { useEffect } from 'react';
import Header from '../commoon/Header';
import Banner from './Banner';
import Faq from './Faq';
import Gallery from './Gallery';
import News from './News';
import Pics from './Pics';
import Rank from './Rank';
import Tab from './Tab';
import Top from './Top';
import Vids from './Vids';
import Visual from './Visual';

function Main(props) {
	useEffect(() => {
		window.scrollTo({ top: 0 });
	}, []);

	return (
		<>
			<Header />
			<Visual />
			<Top />
			<Rank />
			<Gallery />
			<Vids />
			<Banner />
			<Pics />
			<Tab />
			<News />
			<Faq />
		</>
	);
}

export default Main;
