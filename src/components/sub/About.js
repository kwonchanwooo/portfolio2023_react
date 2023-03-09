import { faBus, faParking, faSubway } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useEffect, useMemo, useRef, useState } from 'react';
import Layout from '../commoon/Layout';

function About(props) {
	const [Member, setMember] = useState([]);
	useEffect(() => {
		axios.get(`${process.env.PUBLIC_URL}/DB/member.json`).then((json) => {
			setMember(json.data.members);
		});
	}, []);
	useEffect(() => {}, [Member]);

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
		<Layout name={'About'}>
			<h2>Team COZY를 소개합니다.</h2>
			<h2>Je vous présente Team COZY.</h2>
			<h1>Let me introduce Team COZY.</h1>
			<h2>Team COZYを紹介します。</h2>
			<h2>介绍一下Team COZY。</h2>
			<p>
				Hello. This page introduces the hotel executives. The executives are at the forefront of the
				hotel industry with their expertise and experience. The executives operate and manage
				various hotels around the world, and strive to provide the best service and comfort to
				customers. The executives play a big role in shaping the future of the hotel industry. If
				you want to know more about them, please click on their profiles below.
			</p>
			{Member.map((el, index) => {
				return (
					<article key={index}>
						<div className='inner'>
							<div className='pic'>
								<img src={`${process.env.PUBLIC_URL}/img/${el.pic}`} alt={el.name} />
							</div>
							<div className='txt'>
								<h3>{el.name}</h3>
								<p>{el.position}</p>
							</div>
						</div>
					</article>
				);
			})}
			<div className='Location'>
				<h1>Location</h1>
				<p>
					Hello. This page introduces the hotel location. The hotel is situated in a convenient
					location, with many attractions and shopping malls nearby. We also introduce you to the
					transportation options that you can easily access from the hotel. If you want to know more
					about the location, please check out the map below.
				</p>
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
				<div id='map' ref={container}></div>
				<div className='way'>
					{index === 0 ? (
						<p>서울특별시 용산구 이태원1동 이태원로 179</p>
					) : (
						<p>대구광역시 수성구 용학로 106-7</p>
					)}
					<div className='bus'>
						<div className='img'>
							<FontAwesomeIcon icon={faBus} />
						</div>
						{index === 0 ? (
							<p>
								<ul>
									<li>해밀튼호텔 정류장 - 간선 110A, 110B, 421</li>
									<li>보광동입구 정류장 - 간선 400, 405, 421</li>
									<li>이태원역앞 정류장 - 용산01</li>
								</ul>
							</p>
						) : (
							<p>
								<ul>
									<li>수성못 건너역 정류장 - 401, 814</li>
									<li>불교한방병원 정류장 - 410</li>
								</ul>
							</p>
						)}
					</div>
					<div className='train'>
						<div className='img'>
							<FontAwesomeIcon icon={faSubway} />
						</div>
						{index === 0 ? (
							<p>6호선 이태원역 1, 2번 출구 도보 1분</p>
						) : (
							<p>3호선 수성못(TBC)역 2번출구 도보 15분 </p>
						)}
					</div>
					<div className='car'>
						<div className='img'>
							<FontAwesomeIcon icon={faParking} />
						</div>
						{index === 0 ? (
							<p>객실 투숙객은 객실당 차량 1대만 무료로 이용 가능</p>
						) : (
							<p>객실 투숙객은 객실당 차량 1대만 무료로 이용 가능</p>
						)}
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default About;
