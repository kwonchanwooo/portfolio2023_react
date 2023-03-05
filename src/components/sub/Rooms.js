import React from 'react';
import Btns from './Btns';
import Double from './Double';
import Standard from './Standard';
import Suite from './Suite';
import Twin from './Twin';
function Rooms(props) {
	return (
		<>
			<Standard />
			<Twin />
			<Double />
			<Suite />
			<Btns />
		</>
	);
}

export default Rooms;
