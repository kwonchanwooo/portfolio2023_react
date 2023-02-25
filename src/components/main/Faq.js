import React from 'react';

function Faq(props) {
	return (
		<section id='faq'>
			<div className='container'>
				<h1> FREQEUNTLY ASKED QUESTIONS</h1>

				<div className='question'>
					<input type='radio' name='acc' id='acc1' />
					<label htmlFor='acc1'>
						<h2>01</h2>
						<h3>How do I apply?</h3>
					</label>
					<div className='contents'>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Est harum accusamus dolorem
							quae vel amet eligendi? Itaque necessitatibus eligendi, soluta debitis asperiores
							nobis architecto, consequatur beatae, illum nemo ipsum quis? Lorem ipsum dolor sit,
							amet consectetur adipisicing elit. Voluptatum adipisci blanditiis, voluptas nemo
							tempora eos laboriosam officiis! Ex itaque repellendus consectetur dicta expedita
							perferendis ad modi nobis, iusto obcaecati impedit.
						</p>
					</div>
				</div>
				<div className='question'>
					<input type='radio' name='acc' id='acc2' />
					<label htmlFor='acc2'>
						<h2>02</h2>
						<h3>How do I apply?</h3>
					</label>
					<div className='contents'>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Est harum accusamus dolorem
							quae vel amet eligendi? Itaque necessitatibus eligendi, soluta debitis asperiores
							nobis architecto, consequatur beatae, illum nemo ipsum quis? Lorem ipsum dolor sit,
						</p>
					</div>
				</div>
				<div className='question'>
					<input type='radio' name='acc' id='acc3' />
					<label htmlFor='acc3'>
						<h2>03</h2>
						<h3>How do I apply?</h3>
					</label>
					<div className='contents'>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Est harum accusamus dolorem
							quae vel amet eligendi? Itaque necessitatibus eligendi, soluta debitis asperiores
							nobis architecto, consequatur beatae, illum nemo ipsum quis? Lorem ipsum dolor sit,
							amet consectetur adipisicing elit.Voluptatum adipisci blanditiis, voluptas nemo
							tempora eos laboriosam officiis! Ex itaque repellendus consectetur dicta expedita
							perferendis ad modi nobis, iusto obcaecati impedit.Voluptatum adipisci blanditiis,
							voluptas nemo tempora eos laboriosam officiis! Ex itaque repellendus consectetur dicta
							expedita perferendis ad modi nobis, iusto obcaecati impedit.
						</p>
					</div>
				</div>
				<div className='question'>
					<input type='radio' name='acc' id='acc4' />
					<label htmlFor='acc4'>
						<h2>04</h2>
						<h3>How do I apply?</h3>
					</label>
					<div className='contents'>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Faq;
