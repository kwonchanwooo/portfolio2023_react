import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../commoon/Layout';
import Modal from '../commoon/Modal';

function Video(props) {
	const dispatch = useDispatch();
	const [index, setIndex] = useState(0);
	const open = useRef(null);

	const vids = useSelector((store) => store.videoReducer.video);
	useEffect(() => {
		const key = 'AIzaSyA-UYRzqSCi4U5kxVd_JZ2vPlyksDRJJiQ';
		const playlistId = 'PLqxc4-9rluJ8Ks1sNOzeOADYOJLCLzfiR';
		const num = 6;
		const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlistId}&maxResults=${num}`;

		axios.get(url).then((json) => {
			dispatch({ type: 'SET_VIDEO', payload: json.data.items });
		});
	}, [dispatch]);

	return (
		<>
			<Layout name={'Video'}>
				{vids.map((el, index) => {
					const tit = el.snippet.title;
					const desc = el.snippet.description;
					const date = el.snippet.publishedAt;

					return (
						<article key={el.id}>
							<div
								className='pic'
								onClick={() => {
									open.current.setOpen();
									setIndex(index);
								}}
							>
								<img src={el.snippet.thumbnails.high.url} alt={el.snippet.title} />
								<div className='txt'>
									<h3>{tit.length > 26 ? tit.substr(0, 26) + '...' : tit}</h3>
									<p>{desc.length > 80 ? desc.substr(0, 80) + '...' : desc}</p>
									<span>{date.split('T')[0]}</span>
								</div>
							</div>
						</article>
					);
				})}
			</Layout>

			<Modal ref={open}>
				<iframe
					title={vids[index]?.id}
					src={`https://www.youtube.com/embed/${vids[index]?.snippet.resourceId.videoId}`}
				></iframe>
			</Modal>
		</>
	);
}

export default Video;
