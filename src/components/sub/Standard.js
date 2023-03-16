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
				<div className='room'>
					<div className='pic'>
						<img src={`${process.env.PUBLIC_URL}/img/standard/standard1.jpg`} />
					</div>
					<div className='text'>
						<h1>
							Choose Your <br />
							luxurious room
						</h1>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, accusantium numquam excepturi ratione dicta
							nam cupiditate, labore reprehenderit, maiores obcaecati ducimus officiis rem eaque velit ad corrupti voluptatem
							soluta exercitationem.
							<div className='link'>
								<button className='one'>HELLO</button>
								<button className='two'>WORLD</button>
							</div>
						</p>
					</div>
				</div>
				<div className='button'>
					<nav>
						<ul>
							<li>Standard</li>
							<li>Twin</li>
							<li>Double</li>
							<li>Suiet</li>
						</ul>
					</nav>
				</div>
			</section>
		</section>
	);
}

export default memo(Standard);

{
	/* <div className='pic'>
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
						<div className='desctxt'></div>
						{/* <DescArticle /> */
}
{
	/* </div>
				</div> */
}
