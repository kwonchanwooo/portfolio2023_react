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
				<div className='secondRoom'>
					<h1>Hello world</h1>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo vero aperiam dolores mollitia nostrum quo incidunt
						doloribus inventore officia? A.
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
							<img src={`${process.env.PUBLIC_URL}/img/twin/twin1.jpg`} />
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
							<img src={`${process.env.PUBLIC_URL}/img/twin/twin3.jpg`} />
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
							<img src={`${process.env.PUBLIC_URL}/img/twin/twin4.jpg`} />
							<div className='box'>
								<p>hello</p>
							</div>
						</SwiperSlide>{' '}
						<SwiperSlide>
							<img src={`${process.env.PUBLIC_URL}/img/twin/twin4.jpg`} />
							<div className='box'>
								<p>hello</p>
							</div>
						</SwiperSlide>
					</Swiper>

					{/* <div className='desc'>
						<div className='desctxt' style={{ opacity: `${scrolled / (pos - 1180)}` }}>
							<h1>Twin Room</h1>
							<p>
								Unwind in style in our cozy twin room, featuring two comfortable twin-sized beds, flat-screen TV, and a work desk.
								Take in beautiful views of the city or lush greenery from the room, and stay connected with complimentary Wi-Fi.
								The mini-fridge is perfect for storing drinks and snacks, and the en-suite bathroom with premium toiletries offers
								added comfort. Ideal for friends or family traveling together, book your stay now for a memorable experience.
							</p>
						</div>
						<DescArticle />
					</div> */}
				</div>
			</section>
		</section>
	);
}

export default memo(Twin);
