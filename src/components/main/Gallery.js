import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
function Gallery(props) {
	return (
		<section id='gallery'>
			<div class='inner'>
				<div class='wrap'>
					<h1>HOTEL FACILITIES</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, explicabo.</p>
					<a href='facilities.html'>VIEW ALL</a>
					<article>
						<div class='pic'></div>
						<h2>BANQUET</h2>
						<a href='facilities.html'>
							VIEW MORE <FontAwesomeIcon icon={faCaretRight} />
						</a>
					</article>
					<article>
						<div class='pic'></div>
						<h2>RESTAURANT</h2>
						<a href='banquet.html'>
							VIEW MORE <FontAwesomeIcon icon={faCaretRight} />
						</a>
					</article>
					<article>
						<div class='pic'></div>
						<h2>BAR</h2>
						<a href='bar.html'>
							VIEW MORE <FontAwesomeIcon icon={faCaretRight} />
						</a>
					</article>
					<article>
						<div class='pic'></div>
						<h2>SPA</h2>
						<a href='spa.html'>
							VIEW MORE <FontAwesomeIcon icon={faCaretRight} />
						</a>
					</article>
				</div>
			</div>
		</section>
	);
}

export default Gallery;
