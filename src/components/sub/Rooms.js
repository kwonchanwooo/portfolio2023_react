import React from 'react';
import Btns from './Btns';
import RoomInner from './RoomInner';

function Rooms(props) {
	return (
		<>
			<RoomInner />
			<RoomInner />
			<RoomInner />
			<RoomInner />
			<Btns />
		</>
	);
}

export default Rooms;
