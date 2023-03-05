import { useRef, useState } from 'react';
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
					<h1>HOTEL PICS</h1>

					<ul>
						{pics.map((pic, idx) => {
							if (idx >= 12) return null;
							return (
								<li
									key={idx}
									onClick={() => {
										setIndex(idx);
										open.current.setOpen();
									}}
								>
									<img
										src={`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_b.jpg`}
										alt={pic.title}
									/>
								</li>
							);
						})}
					</ul>
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
