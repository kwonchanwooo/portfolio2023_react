import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { EffectCoverflow, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import DescArticle from './DescArticle';
import Join from './Join';

function RoomBanner(props) {
	return (
		<section id='roomInner' className='myScroll'>
			<section>
				<div className='bottombanner'>
					<div className='txtbox'>
						<h2>Cozy Hotel</h2>
						<h1>JOIN US</h1>
						<p>
							Join our hotel membership program today and enjoy exclusive benefits such as discounted rates, early check-ins, late
							check-outs, and more. Sign up now to start receiving these perks and enhance your hotel experience.
						</p>
					</div>
					<div className='btnbox'>
						<Link to='Join' className='gobutton'>
							Join
						</Link>
					</div>
				</div>
			</section>
		</section>
	);
}

export default memo(RoomBanner);
