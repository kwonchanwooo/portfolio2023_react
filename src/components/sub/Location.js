import { useEffect, useMemo, useRef, useState } from 'react';
import Layout from '../commoon/Layout';
function Location() {
	const option = useRef(null);
	const info = useRef(null);
	const container = useRef(null);
	const { kakao } = window;
	info.current = [
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

	option.current = {
		center: info.current[index].latlng,
		level: 3,
	};
	const markerPosition = option.current.center;
	const mapTypeControl = useMemo(() => new kakao.maps.MapTypeControl(), [kakao]);
	const zoomControl = useMemo(() => new kakao.maps.ZoomControl(), [kakao]);

	const marker = useMemo(() => {
		return new kakao.maps.Marker({
			position: markerPosition,
		});
	}, [kakao, markerPosition]);

	useEffect(() => {
		container.current.innerHTML = '';
		const map = new kakao.maps.Map(container.current, option.current);
		marker.setMap(map);

		map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
		map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

		const setCenter = () => {
			map.setCenter(info.current[index].latlng);
		};

		map.setZoomable(false);
		window.addEventListener('resize', setCenter);

		return () => {
			window.removeEventListener('resize', setCenter);
		};
	}, [index, kakao, mapTypeControl, marker, zoomControl]);

	return (
		<Layout name='Location'>
			<div id='map' ref={container}></div>
			<nav>
				<ul className='branch'>
					{info.current.map((el, idx) => {
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
