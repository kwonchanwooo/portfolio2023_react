import { useEffect, useRef } from 'react';
import Layout from '../commoon/Layout';
function Location() {
	const container = useRef(null);
	const { kakao } = window;
	const option = {
		center: new kakao.maps.LatLng(33.450701, 126.570667),
		level: 3,
	};
	const markerPosition = option.center;
	const marker = new kakao.maps.Marker({
		position: markerPosition,
	});

	useEffect(() => {
		const map = new kakao.maps.Map(container.current, option);

		marker.setMap(map);
	}, []);

	return (
		<Layout name='Location'>
			<div id='map' ref={container}></div>
		</Layout>
	);
}

export default Location;
