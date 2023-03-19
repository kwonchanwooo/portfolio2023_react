import React, { memo } from 'react';
import { EffectCoverflow, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import DescArticle from './DescArticle';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Community from './Community';

function RoomFirstTab(props) {
	const [activeButton, setActiveButton] = useState(0);
	const images = [
		`${process.env.PUBLIC_URL}/img/standard/standard1.jpg`,
		`${process.env.PUBLIC_URL}/img/twin/twin1.jpg`,
		`${process.env.PUBLIC_URL}/img/double/double1.jpg`,
		`${process.env.PUBLIC_URL}/img/suite/suite1.jpg`,
	];

	const handleButtonClick = (index) => {
		setActiveButton(index);
	};
	return (
		<section id='roomFirst' className='myScroll on'>
			<section>
				<div className='room'>
					<div className='pic'>
						<img src={images[activeButton]} />
					</div>
					<div className='text'>
						<h2>Cozy Hotel</h2>
						<h1>
							Choose Your <br />
							luxurious room
						</h1>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, accusantium numquam excepturi ratione dicta
							nam cupiditate, labore reprehenderit, maiores obcaecati ducimus officiis rem eaque velit ad corrupti voluptatem
							soluta exercitationem.
						</p>
						<div className='link'>
							<Link to='Community' className='one'>
								Contact Us
							</Link>
							<Link to='facilities' className='two'>
								Facilities
							</Link>
						</div>
					</div>
				</div>
				<div className='button'>
					<nav>
						<ul>
							<li className={activeButton === 0 ? 'on' : ''} onClick={() => handleButtonClick(0)}>
								Standard
							</li>
							<li className={activeButton === 1 ? 'on' : ''} onClick={() => handleButtonClick(1)}>
								Twin
							</li>
							<li className={activeButton === 2 ? 'on' : ''} onClick={() => handleButtonClick(2)}>
								Double
							</li>
							<li className={activeButton === 3 ? 'on' : ''} onClick={() => handleButtonClick(3)}>
								Suite
							</li>
						</ul>
					</nav>
				</div>
			</section>
		</section>
	);
}

export default memo(RoomFirstTab);
