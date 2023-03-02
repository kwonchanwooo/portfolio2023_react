import { faSpotify, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faHotel } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AnimatePresence, motion } from 'framer-motion';
import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react';

import { Link, NavLink } from 'react-router-dom';
const Menu = forwardRef((props, ref) => {
	const [Open, setOpen] = useState(false);
	const active = { color: 'rgb(207, 24, 41)' };

	useImperativeHandle(ref, () => {
		return { setToggle: () => setOpen(!Open) };
	});

	useEffect(() => {
		window.addEventListener('resize', () => {
			if (window.innerWidth >= 1180) setOpen(false);
		});
	}, []);
	return (
		<AnimatePresence>
			{Open && (
				<motion.nav
					id='mobilePanel'
					initial={{ x: -270, opacity: 0 }}
					animate={{ x: 0, opacity: 1, transition: { duration: 0.3 } }}
					exit={{ x: -270, opacity: 0 }}
					onClick={() => setOpen(false)}
				>
					<h1>
						<Link to='/'>
							{' '}
							<FontAwesomeIcon icon={faHotel} />
						</Link>
					</h1>

					<ul id='gnbMo'>
						<li>
							<NavLink to='/about' activeStyle={active}>
								About
							</NavLink>
						</li>
						<li>
							<NavLink to='/video' activeStyle={active}>
								Video
							</NavLink>
						</li>
						<li>
							<NavLink to='/location' activeStyle={active}>
								Location
							</NavLink>
						</li>
						<li>
							<NavLink to='/rooms' activeStyle={active}>
								Rooms
							</NavLink>
						</li>
						<li>
							<NavLink to='/facilities' activeStyle={active}>
								Facilities
							</NavLink>
						</li>
						<li>
							<NavLink to='/community' activeStyle={active}>
								Community
							</NavLink>
						</li>
						<li>
							<NavLink to='/join' activeStyle={active}>
								Join
							</NavLink>
						</li>
					</ul>

					<ul className='brands'>
						<li>
							<FontAwesomeIcon icon={faYoutube} />
						</li>
						<li>
							<FontAwesomeIcon icon={faTwitter} />
						</li>
						<li>
							<FontAwesomeIcon icon={faSpotify} />
						</li>
					</ul>
				</motion.nav>
			)}
		</AnimatePresence>
	);
});

export default Menu;
