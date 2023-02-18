import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
function Modal(props) {
	useEffect(() => {
		document.body.style.overflow = 'hidden';
		return () => {
			document.body.style.overflow = 'auto';
		};
	}, []);

	return (
		<aside className='modal'>
			<div className='con'>{props.children}</div>
			<span
				className='close'
				onClick={() => {
					props.setOpen(false);
				}}
			>
				<FontAwesomeIcon icon={faCircleXmark} />
			</span>
		</aside>
	);
}

export default Modal;
