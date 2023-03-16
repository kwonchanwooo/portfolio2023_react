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
				<div className='bottombanner'>
					<div className='txtbox'>
						<h1>HEllO WORLD</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, architecto incidunt sint soluta harum aut assumenda
							autem delectus enim suscipit?
						</p>
					</div>
					<div className='btnbox'>
						<div className='gobutton'>GOGO</div>
					</div>
				</div>
			</section>
		</section>
	);
}

export default memo(suite);
