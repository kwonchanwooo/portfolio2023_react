import React from 'react';

import { useSelector } from 'react-redux';

function Vids() {
	const { video } = useSelector((store) => store.videoReducer);
	console.log(video);
	return (
		<section id='vids'>
			<div className='inner'>
				<h1>Youtube</h1>

				{video.map((vid, idx) => {
					if (idx >= 3) return null;
					return (
						<article key={vid.id}>
							<div className='pic'>
								<img src={vid.snippet.thumbnails.medium.url} alt={vid.snippet.title} />
							</div>
						</article>
					);
				})}
			</div>
		</section>
	);
}

export default Vids;
