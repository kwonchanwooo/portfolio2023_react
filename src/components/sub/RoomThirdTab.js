import React, { memo } from 'react';
import { EffectCoverflow, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

function RoomThirdTab(scrolled, pos) {
	return (
		<section id='roomThird' className='myScroll'>
			<section>
				<div className='three'>
					<div className='threePics'>
						<div className='firstpic'>
							<img src={`${process.env.PUBLIC_URL}/img/suite/suite1.jpg`} />
						</div>
						<div className='secondpic'>
							<div className='one'>
								<img src={`${process.env.PUBLIC_URL}/img/suite/suite2.jpg`} />
							</div>
							<div className='two'>
								<img src={`${process.env.PUBLIC_URL}/img/suite/suite3.jpg`} />
							</div>
						</div>
					</div>
					<div className='threeTxt'>
						<h2>Cozy Hotel</h2>
						<h1>
							The perfect luxury <br /> room for you
						</h1>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia quos mollitia deleniti soluta ipsa sequi dolore
							rerum obcaecati eos cum.
						</p>
						<div className='fourbox'>
							{' '}
							<div className='box'>
								<h2>10+</h2>
								<span>Restaurant</span>
							</div>
							<div className='box'>
								<h2>109</h2>
								<span>Rooms</span>
							</div>
							<div className='box'>
								<h2>29</h2>
								<span>GMY</span>
							</div>
							<div className='box'>
								<h2>7</h2>
								<span>BEACH</span>
							</div>
						</div>
					</div>
				</div>
			</section>
		</section>
	);
}

export default memo(RoomThirdTab);
