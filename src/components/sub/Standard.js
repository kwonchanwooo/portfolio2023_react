import React, { memo } from 'react';
import { EffectCoverflow, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import DescArticle from './DescArticle';

function Standard(props) {
	return (
		<section id='roomInner' className='myScroll on'>
			<section>
				<div className='pic'>
					<Swiper
						effect={'coverflow'}
						grabCursor={true}
						loop={true}
						centeredSlides={true}
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
							<img src={`${process.env.PUBLIC_URL}/img/standard/standard1.jpg`} />
						</SwiperSlide>
						<SwiperSlide>
							<img src={`${process.env.PUBLIC_URL}/img/standard/standard2.jpg`} />{' '}
						</SwiperSlide>
						<SwiperSlide>
							<img src={`${process.env.PUBLIC_URL}/img/standard/standard3.jpg`} />{' '}
						</SwiperSlide>
						<SwiperSlide>
							<img src={`${process.env.PUBLIC_URL}/img/standard/standard4.jpg`} />{' '}
						</SwiperSlide>
						<SwiperSlide>
							<img src={`${process.env.PUBLIC_URL}/img/standard/standard5.jpg`} />{' '}
						</SwiperSlide>
					</Swiper>

					<div className='desc'>
						<div className='desctxt'>
							<h1>Standard Room</h1>
							<p>
								Indulge in a comfortable stay in our well-appointed single standard room. With a
								plush king-sized bed, flat-screen TV, and modern amenities, you'll enjoy a relaxing
								and rejuvenating experience. The room also features breathtaking views of the city
								or lush greenery, a mini-fridge to store your drinks and snacks, and an en-suite
								bathroom with premium toiletries. Stay connected with complimentary Wi-Fi and
								24-hour room service. Book now for an unforgettable stay.
							</p>
						</div>
						<DescArticle />
					</div>
				</div>
			</section>
		</section>
	);
}

export default memo(Standard);
