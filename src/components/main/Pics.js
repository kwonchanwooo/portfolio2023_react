import { useRef, useState } from 'react';
import Masonry from 'react-masonry-component';
import { useSelector } from 'react-redux';
import Modal from '../commoon/Modal';
function Pics() {
	const pics = useSelector((store) => store.flickr.data);
	console.log(pics);
	const open = useRef(null);
	const [Index, setIndex] = useState(0);

	return (
		<>
			<section id='pics'>
				<div className='inner'>
					<div className='title'>
						<h1>LOOK AROUND</h1>
						<h2>
							Enjoy the various attractions and natural beauty that you can experience during your
							stay at the hotel
						</h2>
					</div>
					<div className='frame'>
						<Masonry elementType={'div'}>
							{pics.map((pic, idx) => {
								if (idx >= 12) return null;
								return (
									<img
										key={idx}
										src={`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_b.jpg`}
										alt={pic.title}
										onClick={() => {
											setIndex(idx);
											open.current.setOpen();
										}}
									/>
								);
							})}
						</Masonry>
					</div>
				</div>
			</section>

			<Modal ref={open}>
				<img
					src={`https://live.staticflickr.com/${pics[Index]?.server}/${pics[Index]?.id}_${pics[Index]?.secret}_b.jpg`}
					alt={pics[Index]?.title}
				/>
			</Modal>
		</>
	);
}

export default Pics;
