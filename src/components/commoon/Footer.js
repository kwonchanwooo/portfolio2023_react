import { faArrowUp, faHotel } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
function Footer(props) {
	return (
		<footer>
			<div className='inner'>
				<a href='' className='logo1'>
					<FontAwesomeIcon icon={faHotel} />
				</a>

				<ul className='second'>
					<li>
						<a href='https://www.instagram.com' target='_blank'>
							instagram
						</a>
					</li>
					<li>
						<a href='https://www.twitter.com' target='_blank'>
							twitter
						</a>
					</li>
					<li>
						<a href='https://www.facebook.com' target='_blank'>
							facebook
						</a>
					</li>
					<br />
				</ul>

				<a href='#' className='logo2'>
					<FontAwesomeIcon icon={faArrowUp} />
				</a>

				<p>Copyright 2023. kcw All Right Reserved</p>
			</div>
		</footer>
	);
}

export default Footer;
