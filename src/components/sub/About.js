import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import Layout from '../commoon/Layout';
import Modal from '../commoon/Modal';
SwiperCore.use([Navigation]);
function About(props) {
	const [Member, setMember] = useState([]);
	useEffect(() => {
		axios.get(`${process.env.PUBLIC_URL}/DB/member.json`).then((json) => {
			setMember(json.data.members);
		});
	}, []);
	useEffect(() => {}, [Member]);

	const [index, setIndex] = useState(0);
	const open = useRef(null);

	const vids = useSelector((store) => store.video.data);

	return (
		<>
			<Layout name={'About'}>
				<h2>Team COZY를 소개합니다.</h2>
				<h2>Je vous présente Team COZY.</h2>
				<h1>Let me introduce Team COZY.</h1>
				<h2>Team COZYを紹介します。</h2>
				<h2>介绍一下Team COZY。</h2>

				<Swiper
					spaceBetween={10}
					slidesPerView={4}
					height={500}
					loop={true}
					modules={Navigation}
					navigation={true}
					breakpoints={{
						1180: {
							slidesPerView: 4,
							spaceBetween: 10,
						},
						900: {
							slidesPerView: 3,
							spaceBetween: 10,
						},
						200: {
							slidesPerView: 1,
							spaceBetween: 10,
						},
					}}
				>
					{Member.map((el, idx) => {
						return (
							<SwiperSlide key={idx}>
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
							</SwiperSlide>
						);
					})}
				</Swiper>
				<p>
					This page introduces the hotel executives. The executives are at the forefront of the
					hotel industry with their expertise and experience. The executives operate and manage
					various hotels around the world, and strive to provide the best service and comfort to
					customers. The executives play a big role in shaping the future of the hotel industry. If
					you want to know more about them, please click on their profiles below.
				</p>
			</Layout>

			<div className='Video'>
				<div className='inner'>
					{/* <h2>호텔의 비디오를 구경하세요.</h2>
					<h2>Regardez la vidéo de l’hôtel.</h2> */}
					<h1>Watch our video.</h1>
					{/* <h2>ホテルのビデオを見てください。</h2>
					<h2>观看酒店视频。</h2> */}
					<p>
						Welcome to our hotel video section. Here you can watch videos of our rooms, facilities,
						services and more. Enjoy your virtual tour and book your stay with us today! You will
						see why our hotel is the perfect choice for your travel needs. Whether you are looking
						for a relaxing getaway, a business trip or a family vacation, we have something for
						everyone. Our hotel video section will show you the quality and comfort that await you
						at our hotel.
					</p>
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
					<Modal ref={open}>
						<iframe
							title={vids[index]?.id}
							src={`https://www.youtube.com/embed/${vids[index]?.snippet.resourceId.videoId}`}
						></iframe>
					</Modal>
				</div>
			</div>
		</>
	);
}

export default About;
