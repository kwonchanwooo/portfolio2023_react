import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import Layout from '../commoon/Layout';
import Modal from '../commoon/Modal';

function Video(props) {
	const [index, setIndex] = useState(0);
	const vids = useSelector((store) => store.videoReducer.video);
	const open = useRef(null);

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
