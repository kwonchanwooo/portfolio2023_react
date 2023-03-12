import React, { useEffect, useRef } from 'react';

function Layout(props) {
	const frame = useRef(null);

	useEffect(() => {
		frame.current.classList.add('on');
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}, []);

	return (
		<section className={`content ${props.name}`} ref={frame}>
			<figure>
				<h1>{props.name}</h1>
			</figure>
			<div className='inner'>{props.children}</div>
		</section>
	);
}

export default Layout;
