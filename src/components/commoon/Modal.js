import { AnimatePresence, motion } from 'framer-motion';
import { forwardRef, useEffect, useImperativeHandle, useState } from 'react';

const Modal = forwardRef((props, ref) => {
	const [Open, setOpen] = useState(false);

	useImperativeHandle(ref, () => {
		return { setOpen: () => setOpen(true) };
	});

	useEffect(() => {
		Open ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'auto');
	}, [Open]);

	return (
		<AnimatePresence>
			{Open && (
				<motion.aside
					className='modal'
					initial={{ opacity: 0, scale: 0 }}
					animate={{ opacity: 1, scale: 1 }}
					exit={{ opacity: 0, scale: 0 }}
				>
					<motion.div
						className='con'
						initial={{ opaciy: 0 }}
						animate={{ opacity: 1, transition: { delay: 0.6 } }}
						exit={{ opaciy: 0 }}
					>
						{props.children}
					</motion.div>
					<motion.span
						className='close'
						onClick={() => setOpen(false)}
						initial={{ opaciy: 0, x: 100 }}
						animate={{ x: 0, opaciy: 1, transition: { delay: 0.7 } }}
						exit={{ x: 100, opacity: 0 }}
					>
						Close
					</motion.span>
				</motion.aside>
			)}
		</AnimatePresence>
	);
});

export default Modal;
