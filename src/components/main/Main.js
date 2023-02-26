import React from 'react';
import Header from '../commoon/Header';
import Banner from './Banner';
import Faq from './Faq';
import Gallery from './Gallery';
import News from './News';
import Rank from './Rank';
import Tab from './Tab';
import Top from './Top';
import Visual from './Visual';
function Main(props) {
	return (
		<>
			<Header />
			<Visual />
			<Top />
			<Rank />
			<Gallery />
			<Banner />
			<Tab />
			<News />
			<Faq />
		</>
	);
}

export default Main;
