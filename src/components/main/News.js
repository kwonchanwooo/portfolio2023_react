import { useEffect, useState } from 'react';

function News({ Scrolled, Pos }) {
	const getLocalData = () => {
		const dummys = [
			{
				title: 'Check-in time',
				content: ' I am arriving early in the morning. Can I check in before 3 pm?',
			},
			{
				title: 'Breakfast menu',
				content: 'I have some dietary restrictions. What kind of food do you serve for breakfast?',
			},
			{
				title: 'Parking fee',
				content:
					'I am planning to rent a car during my stay. How much is the parking fee per day and where can I park?',
			},
			{
				title: 'Room service',
				content:
					'I want to order some food and drinks to my room. Do you offer room service 24/7 and what is the menu?',
			},
			{
				title: 'Wi-Fi password',
				content:
					'I need to use the internet in my room. How can I get the Wi-Fi password and is it free of charge?',
			},
			{
				title: 'Shuttle bus',
				content:
					'I have a flight to catch on the day of check-out. Do you have a shuttle bus to the airport and how often does it run?',
			},
		];
		const data = localStorage.getItem('post');

		if (data) return JSON.parse(data);
		else return dummys;
	};

	const [Posts] = useState(getLocalData());

	useEffect(() => {
		localStorage.setItem('post', JSON.stringify(Posts));
	}, [Posts]);

	return (
		<section id='news'>
			<div className='inner'>
				<h1>NEWS</h1>

				{Posts.map((post, idx) => {
					if (idx >= 4) return null;
					return (
						<article key={idx}>
							<h3>{post.title}</h3>
							<p>{post.content}</p>
						</article>
					);
				})}
			</div>
		</section>
	);
}

export default News;
