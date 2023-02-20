import { useEffect, useRef, useState } from 'react';
import Layout from '../commoon/Layout';
function Location() {
	const container = useRef(null);
	const { kakao } = window;
	const info = [
		{
			title: '서울 이태원점',
			latlng: new kakao.maps.LatLng(37.5347906, 126.9935937),
		},
		{
			title: '대구 수성못점',
			latlng: new kakao.maps.LatLng(35.8252327, 128.6203849),
		},
	];

	const [index, setIndex] = useState(0);
	const [location, setLocation] = useState(null);

	const option = {
		center: info[index].latlng,
		level: 3,
	};
	const markerPosition = option.center;
	const mapTypeControl = new kakao.maps.MapTypeControl();
	const zoomControl = new kakao.maps.ZoomControl();

	const marker = new kakao.maps.Marker({
		position: markerPosition,
	});

	useEffect(() => {
		container.current.innerHTML = '';
		const map = new kakao.maps.Map(container.current, option);
		marker.setMap(map);
		setLocation(map);
		map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
		map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

		const setCenter = () => {
			map.setCenter(info[index].latlng);
		};

		map.setZoomable(false);
		window.addEventListener('resize', setCenter);

		return () => {
			window.removeEventListener('resize', setCenter);
		};
	}, [index]);

	return (
		<Layout name='Location'>
			<div id='map' ref={container}></div>
			<nav>
				<ul className='branch'>
					{info.map((el, idx) => {
						return (
							<li
								key={idx}
								className={idx === index ? 'on' : ''}
								onClick={() => {
									setIndex(idx);
								}}
							>
								{el.title}
							</li>
						);
					})}
				</ul>
			</nav>
		</Layout>
	);
}

export default Location;
