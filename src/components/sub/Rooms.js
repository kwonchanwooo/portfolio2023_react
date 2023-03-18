import React, { useState } from 'react';
import Btns from './Btns';
import RoomThirdTab from './RoomThirdTab';
import RoomFirstTab from './RoomFirstTab';
import RoomSecondTab from './RoomSecondTab';
import RoomBanner from './RoomBanner';
function Rooms(props) {
	const [scrolled, setScrolled] = useState(0);
	const [pos, setPos] = useState([]);
	return (
		<>
			<RoomFirstTab scrolled={scrolled} pos={pos[1]} />
			<RoomSecondTab scrolled={scrolled} pos={pos[2]} />
			<RoomThirdTab scrolled={scrolled} pos={pos[3]} />
			<RoomBanner scrolled={scrolled} pos={pos[4]} />
			<Btns setScrolled={setScrolled} setPos={setPos} />
		</>
	);
}

export default Rooms;
