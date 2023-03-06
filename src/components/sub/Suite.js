import React, { memo } from 'react';
import { EffectCoverflow, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import DescArticle from './DescArticle';

function suite(props) {
	return (
		<section id='roomInner' className='myScroll'>
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
							<img src={`${process.env.PUBLIC_URL}/img/suite/suite1.jpg`} />
						</SwiperSlide>
						<SwiperSlide>
							<img src={`${process.env.PUBLIC_URL}/img/suite/suite2.jpg`} />
						</SwiperSlide>
						<SwiperSlide>
							<img src={`${process.env.PUBLIC_URL}/img/suite/suite3.jpg`} />
						</SwiperSlide>
						<SwiperSlide>
							<img src={`${process.env.PUBLIC_URL}/img/suite/suite4.jpg`} />
						</SwiperSlide>
						<SwiperSlide>
							<img src={`${process.env.PUBLIC_URL}/img/suite/suite5.jpg`} />
						</SwiperSlide>
						<SwiperSlide>
							<img src={`${process.env.PUBLIC_URL}/img/suite/suite6.jpg`} />
						</SwiperSlide>
					</Swiper>

					<div className='desc'>
						<div className='desctxt'>
							<h1>Suite Room</h1>
							<p>
								Indulge in the ultimate luxury experience in our spacious Suite room. With a
								separate living area, plush king-sized bed, and breathtaking views, this room offers
								the ultimate in comfort and elegance. Stay connected with complimentary Wi-Fi, and
								make use of the mini-fridge to store your drinks and snacks. The en-suite bathroom
								with premium toiletries and a spa-like shower add an extra touch of indulgence. Book
								your suite room now and elevate your stay to new heights of luxury and
								sophistication.
							</p>
						</div>
						<DescArticle />
					</div>
				</div>
			</section>
		</section>
	);
}

export default memo(suite);
