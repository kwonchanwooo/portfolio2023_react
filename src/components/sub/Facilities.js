import { useEffect, useRef, useState } from 'react';
import Masonry from 'react-masonry-component';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFlickr } from '../../redux/flickerSlice';
import Layout from '../commoon/Layout';
import Modal from '../commoon/Modal';

function Gallery() {
	const dispatch = useDispatch();
	const init = useRef(true);
	const open = useRef(null);
	const frame = useRef(null);
	const input = useRef(null);
	const [Index, setIndex] = useState(0);
	const [Loading, setLoading] = useState(true);
	const Items = useSelector((store) => store.flickr.data);
	const [Button, setButton] = useState(null);
	const handleButtonClick = (button) => {
		setButton(button);
	};
	const Banquet = () => {
		frame.current.classList.remove('on');
		setLoading(true);
		dispatch(fetchFlickr({ type: 'BANQUET' }));
	};
	const Restaurant = () => {
		frame.current.classList.remove('on');
		setLoading(true);
		dispatch(fetchFlickr({ type: 'RESTAURANT' }));
	};
	const Bar = () => {
		frame.current.classList.remove('on');
		setLoading(true);
		dispatch(fetchFlickr({ type: 'BAR' }));
	};
	const Spa = () => {
		frame.current.classList.remove('on');
		setLoading(true);
		dispatch(fetchFlickr({ type: 'SPA' }));
	};

	const showUser = (e) => {
		init.current = false;
		frame.current.classList.remove('on');
		setLoading(true);
		dispatch(fetchFlickr({ type: 'user', user: e.target.innerText }));
	};

	const showSearch = () => {
		const result = input.current.value.trim();
		if (!result) return alert('검색어를 입력하세요.');
		input.current.value = '';
		frame.current.classList.remove('on');
		setLoading(true);
		dispatch(fetchFlickr({ type: 'search', tags: result }));
		init.current = false;
		const buttons = document.querySelectorAll('button');
		buttons.forEach((button) => button.classList.remove('on'));
	};

	let handleKeyUp = (e) => {
		e.key === 'Enter' && showSearch();
	};

	useEffect(() => {
		if (Items.length === 0 && !init.current) {
			dispatch(fetchFlickr({ type: 'BANQUET' }));
			frame.current.classList.remove('on');
			setLoading(true);
			return alert('검색어의 결과 이미지가 없습니다.');
		}
		setTimeout(() => {
			frame.current.classList.add('on');
			setLoading(false);
		}, 500);
	}, [Items, dispatch]);

	useEffect(() => {
		handleButtonClick('Banquet');
	}, []);
	return (
		<>
			<Layout name='Gallery'>
				<div className='controls'>
					<div className='searchBox'>
						<input
							type='text'
							placeholder='검색어를 입력하세요.'
							ref={input}
							onKeyPress={handleKeyUp}
						/>
						<button onClick={showSearch}>Search</button>
					</div>

					<nav>
						<button
							className={Button === 'Banquet' ? 'on' : ''}
							onClick={() => {
								Banquet();
								handleButtonClick('Banquet');
							}}
						>
							Banquet
						</button>
						<button
							className={Button === 'Restaurant' ? 'on' : ''}
							onClick={() => {
								Restaurant();
								handleButtonClick('Restaurant');
							}}
						>
							Restaurant
						</button>
						<button
							className={Button === 'Bar' ? 'on' : ''}
							onClick={() => {
								Bar();
								handleButtonClick('Bar');
							}}
						>
							Bar
						</button>
						<button
							className={Button === 'Spa' ? 'on' : ''}
							onClick={() => {
								Spa();
								handleButtonClick('Spa');
							}}
						>
							Spa
						</button>
					</nav>
				</div>

				{Loading && (
					<img className='loader' src={`${process.env.PUBLIC_URL}/img/loading.gif`} alt='loading' />
				)}

				<div className='frame' ref={frame}>
					<Masonry elementType={'div'} options={{ transitionDuration: '0.5s' }}>
						{Items.map((item, idx) => {
							return (
								<article key={idx}>
									<div className='inner'>
										<div
											className='pic'
											onClick={() => {
												open.current.setOpen();
												setIndex(idx);
											}}
										>
											<img
												src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_b.jpg`}
												alt={item.title}
											/>
										</div>
										<h2>{item.title}</h2>

										<div className='profile'>
											<img
												src={`http://farm${item.farm}.staticflickr.com/${item.server}/buddyicons/${item.owner}.jpg`}
												alt={item.owner}
												onError={(e) => {
													e.target.setAttribute(
														'src',
														'https://www.flickr.com/images/buddyicon.gif'
													);
												}}
											/>
											<span onClick={showUser}>{item.owner}</span>
										</div>
									</div>
								</article>
							);
						})}
					</Masonry>
				</div>
			</Layout>

			<Modal ref={open}>
				<img
					src={`https://live.staticflickr.com/${Items[Index]?.server}/${Items[Index]?.id}_${Items[Index]?.secret}_b.jpg`}
					alt={Items[Index]?.title}
				/>
			</Modal>
		</>
	);
}

export default Gallery;
