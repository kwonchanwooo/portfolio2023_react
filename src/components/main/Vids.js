import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import Modal from '../commoon/Modal';

function BtnRolling() {
	const swiper = useSwiper();
	const btnRun = useRef(null);
	const btnPause = useRef(null);

	return (
		<nav className='controls'>
			<FontAwesomeIcon
				ref={btnRun}
				className='on'
				icon={faPlay}
				onClick={() => {
					if (!swiper.autoplay.paused) return;
					swiper.autoplay.run();
					btnRun.current.classList.add('on');
					btnPause.current.classList.remove('on');
				}}
			/>
			<FontAwesomeIcon
				ref={btnPause}
				icon={faPause}
				onClick={() => {
					if (swiper.autoplay.paused) return;
					swiper.autoplay.pause();
					btnRun.current.classList.remove('on');
					btnPause.current.classList.add('on');
				}}
			/>
		</nav>
	);
}

function Vids() {
	const Vids = useSelector((store) => store.video.data);
	const [Index, setIndex] = useState(0);
	const open = useRef(null);

	useEffect(() => {
		const btnPagination = document.querySelector('.swiper-pagination');
		const btnPrev = document.querySelector('.swiper-button-prev');
		const btnNext = document.querySelector('.swiper-button-next');
		const faPlayBtn = document.querySelector('.fa-play');
		const faPauseBtn = document.querySelector('.fa-pause');

		[btnPagination, btnPrev, btnNext].map((el, idx) =>
			el.addEventListener('click', () => {
				faPlayBtn.classList.remove('on');
				faPauseBtn.classList.add('on');
			})
		);
	}, []);
	return (
		<>
			<section id='vids' className='myScroll'>
				<Swiper
					slidesPerView={1}
					spaceBetween={50}
					loop={true}
					centeredSlides={true}
					navigation={true}
					pagination={{ clickable: true }}
					autoplay={{
						delay: 2000,
						disableOnInteraction: true,
					}}
					modules={[Autoplay, Pagination, Navigation]}
					breakpoints={{
						1200: {
							slidesPerView: 3,
							spaceBetween: 50,
						},
					}}
				>
					<BtnRolling />

					{Vids.map((vid, idx) => {
						if (idx >= 8) return null;

						return (
							<SwiperSlide key={idx}>
								<div className='inner'>
									<div
										className='pic'
										onClick={() => {
											setIndex(idx);
											open.current.setOpen();
										}}
									>
										<img src={vid.snippet.thumbnails.high.url} alt={vid.snippet.title} />
									</div>
									<h2>
										{vid.snippet.title.length >= 30
											? vid.snippet.title.substr(0, 40) + '...'
											: vid.snippet.title}
									</h2>
									<p>
										{vid.snippet.description.length >= 100
											? vid.snippet.description.substr(0, 150) + '...'
											: vid.snippet.description}
									</p>
								</div>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</section>

			<Modal ref={open}>
				<iframe
					title={Vids[Index]?.id}
					src={`https://www.youtube.com/embed/${Vids[Index]?.snippet.resourceId.videoId}`}
				></iframe>
			</Modal>
		</>
	);
}

export default Vids;
