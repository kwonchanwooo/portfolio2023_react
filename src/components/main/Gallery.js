import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
function Gallery(props) {
	return (
		<section id='gallery'>
			<div className='inner'>
				<div className='wrap'>
					<h1>HOTEL FACILITIES</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, explicabo.</p>
					<Link to='/facilities'>VIEW ALL</Link>
					<article>
						<div className='pic'></div>
						<h2>BANQUET</h2>
						<Link to='/facilities'>
							VIEW MORE <FontAwesomeIcon icon={faCaretRight} />
						</Link>
					</article>
					<article>
						<div className='pic'></div>
						<h2>RESTAURANT</h2>
						<Link to='/facilities'>
							VIEW MORE <FontAwesomeIcon icon={faCaretRight} />
						</Link>
					</article>
					<article>
						<div className='pic'></div>
						<h2>BAR</h2>
						<Link to='/facilities'>
							VIEW MORE <FontAwesomeIcon icon={faCaretRight} />
						</Link>
					</article>
					<article>
						<div className='pic'></div>
						<h2>SPA</h2>
						<Link to='/facilities'>
							VIEW MORE <FontAwesomeIcon icon={faCaretRight} />
						</Link>
					</article>
				</div>
			</div>
		</section>
	);
}

export default Gallery;
