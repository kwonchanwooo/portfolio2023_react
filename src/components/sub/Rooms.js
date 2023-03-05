import React, { useState } from 'react';
import Btns from './Btns';
import Double from './Double';
import Standard from './Standard';
import Suite from './Suite';
import Twin from './Twin';
function Rooms(props) {
	const [scrolled, setScrolled] = useState(0);
	const [pos, setPos] = useState([]);
	return (
		<>
			<Standard scrolled={scrolled} pos={pos[1]} />
			<Twin scrolled={scrolled} pos={pos[2]} />
			<Double scrolled={scrolled} pos={pos[3]} />
			<Suite scrolled={scrolled} pos={pos[4]} />
			<Btns setScrolled={setScrolled} setPos={setPos} />
		</>
	);
}

export default Rooms;
