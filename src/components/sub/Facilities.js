import { useEffect, useRef, useState } from 'react';
import Masonry from 'react-masonry-component';
import Layout from '../commoon/Layout';
import Modal from '../commoon/Modal';

function Gallery() {
	const open = useRef(null);
	const frame = useRef(null);
	const input = useRef(null);
	const [Items, setItems] = useState([]);
	const [Index, setIndex] = useState(0);
	const [Loading, setLoading] = useState(true);

	const getFlickr = async (opt) => {
		if (result.data.photos.photo.length === 0) {
			frame.current.classList.add('on');
			setLoading(false);
			return alert('해당 검색어의 결과 이미지가 없습니다.');
		}
		setItems(result.data.photos.photo);

		setTimeout(() => {
			setLoading(false);
			frame.current.classList.add('on');
		}, 500);
	};

	const Banquet = () => {
		frame.current.classList.remove('on');
		setLoading(true);
		getFlickr({ type: 'BANQUET' });
	};
	const Restaurant = () => {
		frame.current.classList.remove('on');
		setLoading(true);
		getFlickr({ type: 'RESTAURANT' });
	};
	const Bar = () => {
		frame.current.classList.remove('on');
		setLoading(true);
		getFlickr({ type: 'BAR' });
	};
	const Spa = () => {
		frame.current.classList.remove('on');
		setLoading(true);
		getFlickr({ type: 'SPA' });
	};

	const showUser = (e) => {
		frame.current.classList.remove('on');
		setLoading(true);
		getFlickr({ type: 'user', user: e.target.innerText });
	};

	const showSearch = () => {
		const result = input.current.value.trim();
		if (!result) return alert('검색어를 입력하세요.');
		input.current.value = '';
		frame.current.classList.remove('on');
		setLoading(true);
		getFlickr({ type: 'search', tags: result });
	};

	let handleKeyUp = (e) => {
		e.key === 'Enter' && showSearch();
	};

	useEffect(() => {
		getFlickr({ type: 'BANQUET' });
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
						<button onClick={Banquet}>Banquet</button>
						<button onClick={Restaurant}>Restaurant</button>
						<button onClick={Bar}>Bar</button>
						<button onClick={Spa}>Spa</button>
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
