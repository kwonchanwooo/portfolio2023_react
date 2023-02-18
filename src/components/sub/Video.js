import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Layout from '../commoon/Layout';
function Video(props) {
	const [vids, setVids] = useState([]);

	useEffect(() => {
		const key = 'AIzaSyA-UYRzqSCi4U5kxVd_JZ2vPlyksDRJJiQ';
		const playlistId = 'PLqxc4-9rluJ8Ks1sNOzeOADYOJLCLzfiR';
		const num = 6;
		const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlistId}&maxResults=${num}`;

		axios.get(url).then((json) => {
			setVids(json.data.items);
		});
	}, []);

	return (
		<>
			<Layout name={'Video'}>
				{vids.map((el, index) => {
					const tit = el.snippet.title;
					const desc = el.snippet.description;
					const date = el.snippet.publishedAt;

					return (
						<article key={el.id}>
							<h3>{tit.length > 26 ? tit.substr(0, 26) + '...' : tit}</h3>
							<div className='txt'>
								<p>{desc.length > 80 ? desc.substr(0, 80) + '...' : desc}</p>
								<span>{date.split('T')[0]}</span>
							</div>
							<div className='pic'>
								<img src={el.snippet.thumbnails.high.url} alt={el.snippet.title} />
							</div>
						</article>
					);
				})}
			</Layout>
		</>
	);
}

export default Video;
