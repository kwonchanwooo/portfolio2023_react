import { useEffect, useState } from 'react';

function News({ Scrolled, Pos }) {
	const getLocalData = () => {
		const dummys = [
			{ title: 'Hello4', content: 'Here comes description in detail.' },
			{ title: 'Hello3', content: 'Here comes description in detail.' },
			{ title: 'Hello2', content: 'Here comes description in detail.' },
			{ title: 'Hello1', content: 'Here comes description in detail.' },
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
