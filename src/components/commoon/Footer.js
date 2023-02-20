import { faArrowUp, faHotel } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
function Footer(props) {
	return (
		<footer>
			<div className='inner'>
				<a href='/' className='logo1'>
					<FontAwesomeIcon icon={faHotel} />
				</a>

				<ul className='second'>
					<li>
						<a href='https://www.instagram.com' target='noopener'>
							instagram
						</a>
					</li>
					<li>
						<a href='https://www.twitter.com' target='noopener'>
							twitter
						</a>
					</li>
					<li>
						<a href='https://www.facebook.com' target='noopener'>
							facebook
						</a>
					</li>
					<br />
				</ul>

				<a
					href='/'
					className='logo2'
					onClick={(e) => {
						e.preventDefault();
						window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
					}}
				>
					<FontAwesomeIcon icon={faArrowUp} />
				</a>

				<p>Copyright 2023. kcw All Right Reserved</p>
			</div>
		</footer>
	);
}

export default Footer;
