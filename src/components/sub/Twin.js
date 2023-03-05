import React, { memo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { EffectCoverflow, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import DescArticle from './DescArticle';

function Twin({ scrolled, pos }) {
	return (
		<section id='roomInner' className='myScroll'>
			<section>
				<div className='pic'>
					<Swiper
						effect={'coverflow'}
						grabCursor={true}
						centeredSlides={true}
						loop={true}
						slidesPerView={'auto'}
						coverflowEffect={{
							rotate: 50,
							stretch: 0,
							depth: 100,
							modifier: 1,
							slideShadows: true,
						}}
						pagination={true}
						modules={[EffectCoverflow, Pagination]}
						className='mySwiper'
					>
						<SwiperSlide>
							<img src={`${process.env.PUBLIC_URL}/img/twin/twin1.jpg`} />
						</SwiperSlide>
						<SwiperSlide>
							<img src={`${process.env.PUBLIC_URL}/img/twin/twin2.jpg`} />
						</SwiperSlide>
						<SwiperSlide>
							<img src={`${process.env.PUBLIC_URL}/img/twin/twin3.jpg`} />
						</SwiperSlide>
						<SwiperSlide>
							<img src={`${process.env.PUBLIC_URL}/img/twin/twin4.jpg`} />{' '}
						</SwiperSlide>
					</Swiper>

					<div className='desc'>
						<div className='desctxt' style={{ opacity: `${pos - scrolled}` }}>
							<h1>Twin Room</h1>
							<p>
								Unwind in style in our cozy twin room, featuring two comfortable twin-sized beds,
								flat-screen TV, and a work desk. Take in beautiful views of the city or lush
								greenery from the room, and stay connected with complimentary Wi-Fi. The mini-fridge
								is perfect for storing drinks and snacks, and the en-suite bathroom with premium
								toiletries offers added comfort. Ideal for friends or family traveling together,
								book your stay now for a memorable experience.
							</p>
						</div>
						<DescArticle />
					</div>
				</div>
			</section>
		</section>
	);
}

export default memo(Twin);
