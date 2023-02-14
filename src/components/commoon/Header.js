import { faBars, faHotel } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';
function Header(props) {
	const active = { color: 'rgb(207, 24, 41)' };
	return (
		<header className={props.type}>
			<div className='inner'>
				<h1>
					<NavLink exact to='/' activeStyle={active}>
						<FontAwesomeIcon icon={faHotel} />
					</NavLink>
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
				<FontAwesomeIcon icon={faBars} />
			</div>
		</header>
	);
}

export default Header;
