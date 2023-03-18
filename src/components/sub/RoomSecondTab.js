import React, { memo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { EffectCoverflow, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import DescArticle from './DescArticle';

function RoomSecondTab({ scrolled, pos }) {
	return (
		<section id='roomInner' className='myScroll'>
			<section>
				<div className='secondRoom'>
					<h2>Cozy Hotel</h2>
					<h1>Room Suggest</h1>
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
						// loop={true}
						slidesPerView={'auto'}
						spaceBetween={80}
						// coverflowEffect={{
						// 	rotate: 50,
						// 	stretch: 0,
						// 	depth: 50,
						// 	modifier: 1,
						// 	slideShadows: true,
						// }}
						navigation={true}
						pagination={true}
						modules={[]}
						className='mySwiper'
					>
						<SwiperSlide>
							<img src={`${process.env.PUBLIC_URL}/img/standard/standard2.jpg`} />
							<div className='box'>
								<p>hello</p>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<img src={`${process.env.PUBLIC_URL}/img/standard/standard3.jpg`} />
							<div className='box'>
								<p>hello</p>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<img src={`${process.env.PUBLIC_URL}/img/twin/twin4.jpg`} />
							<div className='box'>
								<p>hello</p>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<img src={`${process.env.PUBLIC_URL}/img/twin/twin2.jpg`} />
							<div className='box'>
								<p>hello</p>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<img src={`${process.env.PUBLIC_URL}/img/double/double3.jpg`} />
							<div className='box'>
								<p>hello</p>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<img src={`${process.env.PUBLIC_URL}/img/double/double4.jpg`} />
							<div className='box'>
								<p>hello</p>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<img src={`${process.env.PUBLIC_URL}/img/suite/suite3.jpg`} />
							<div className='box'>
								<p>hello</p>
							</div>
						</SwiperSlide>{' '}
						<SwiperSlide>
							<img src={`${process.env.PUBLIC_URL}/img/suite/suite4.jpg`} />
							<div className='box'>
								<p>hello</p>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</section>
		</section>
	);
}

export default memo(RoomSecondTab);
