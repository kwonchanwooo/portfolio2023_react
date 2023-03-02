import { faBars, faHotel } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { memo, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Menu from './Menu';
function Header(props) {
	const menu = useRef(null);
	const active = { color: 'rgb(207, 24, 41)' };
	return (
		<>
			<header className={props.type}>
				<div className='inner'>
					<h1>
						<Link to='/' activeStyle={active}>
							<FontAwesomeIcon icon={faHotel} />
						</Link>
					</h1>
					<ul id='gnb'>
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
					<FontAwesomeIcon icon={faBars} onClick={() => menu.current.setToggle()} />
				</div>
			</header>

			<Menu ref={menu} />
		</>
	);
}

export default memo(Header);
