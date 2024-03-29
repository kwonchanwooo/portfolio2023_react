import React, { memo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { EffectCoverflow, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

function RoomSecondTab({ scrolled, pos }) {
	return (
		<section id='roomSecond' className='myScroll'>
			<section>
				<div className='secondRoom'>
					<h2 style={{ transform: `translateX(${scrolled * 2 - pos}px)` }}>Cozy Hotel</h2>
					<h1 style={{ transform: `translateX(${scrolled * 2 - pos}px)` }}>Room Suggest</h1>
					<p>
						We have four categories of rooms to suit your needs and preferences: standard, double, twin and suite. You can browse
						through the photos below to get a glimpse of what each room looks like. Whether you are traveling alone, with a
						partner, with friends or with family, we have a room that will make you feel at home.
					</p>
				</div>
				<div className='pics'>
					<Swiper
						effect={'coverflow'}
						grabCursor={true}
						centeredSlides={true}
						slidesPerView={'auto'}
						spaceBetween={80}
						navigation={true}
						pagination={true}
						modules={[]}
						className='mySwiper'
					>
						<SwiperSlide>
							<img src={`${process.env.PUBLIC_URL}/img/standard/standard2.jpg`} alt={'standard방의 사진'} />
							<div className='box'>
								<p>Blue Standard Room</p>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<img src={`${process.env.PUBLIC_URL}/img/standard/standard3.jpg`} alt={'standard방의 사진'} />
							<div className='box'>
								<p>White Standard Room</p>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<img src={`${process.env.PUBLIC_URL}/img/twin/twin4.jpg`} alt={'Twin방의 사진'} />
							<div className='box'>
								<p>White Twin Room</p>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<img src={`${process.env.PUBLIC_URL}/img/twin/twin2.jpg`} alt={'twin방의 사진'} />
							<div className='box'>
								<p>Blue Twin room</p>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<img src={`${process.env.PUBLIC_URL}/img/double/double3.jpg`} alt={'double방의 사진'} />
							<div className='box'>
								<p>Gray Double Room</p>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<img src={`${process.env.PUBLIC_URL}/img/double/double4.jpg`} alt={'double방의 사진'} />
							<div className='box'>
								<p>Brown Double Room</p>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<img src={`${process.env.PUBLIC_URL}/img/suite/suite3.jpg`} alt={'suite방의 사진'} />
							<div className='box'>
								<p>Gray Suite Room</p>
							</div>
						</SwiperSlide>{' '}
						<SwiperSlide>
							<img src={`${process.env.PUBLIC_URL}/img/suite/suite4.jpg`} alt={'suite방의 사진'} />
							<div className='box'>
								<p>Red Suite Room</p>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</section>
		</section>
	);
}

export default memo(RoomSecondTab);
