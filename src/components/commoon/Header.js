import { faBars, faHotel } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggle } from '../../redux/menuSlice';
function Header(props) {
	const dispatch = useDispatch();
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
							<Link to='/about' activeStyle={active}>
								About
							</Link>
						</li>

						<li>
							<Link to='/rooms' activeStyle={active}>
								Rooms
							</Link>
						</li>
						<li>
							<Link to='/facilities' activeStyle={active}>
								Facilities
							</Link>
						</li>
						<li>
							<Link to='/community' activeStyle={active}>
								Contact
							</Link>
						</li>
						<li>
							<Link to='/join' activeStyle={active}>
								Join
							</Link>
						</li>
					</ul>
					<FontAwesomeIcon icon={faBars} onClick={() => dispatch(toggle())} />
				</div>
			</header>
		</>
	);
}

export default memo(Header);
