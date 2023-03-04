import { useEffect, useRef } from 'react';

function Btns() {
	const pos = useRef([]);
	const btnRef = useRef(null);
	const num = useRef(4);

	const getPos = () => {
		pos.current = [];
		const secs = btnRef.current.parentElement.querySelectorAll('.myScroll');
		for (const sec of secs) pos.current.push(sec.offsetTop);
		console.log(pos.current);
	};

	const activation = () => {
		const btns = btnRef.current.children;
		const scroll = window.scrollY;
		const base = -window.innerHeight / 3;

		pos.current.forEach((pos, idx) => {
			if (scroll >= pos + base) {
				for (const btn of btns) btn.classList.remove('on');
				btns[idx].classList.add('on');
			}
		});
	};
	useEffect(() => {
		getPos();
		window.addEventListener('resize', getPos);
		window.addEventListener('scroll', activation);
		return () => {
			window.removeEventListener('resize', getPos);
			window.removeEventListener('scroll', activation);
		};
	}, []);
	return (
		<ul className='scroll_navi' ref={btnRef}>
			{Array(num.current)
				.fill()
				.map((_, idx) => {
					return <li key={idx} className={`${idx === 0 ? 'on' : ''}`}></li>;
				})}
		</ul>
	);
}

export default Btns;
