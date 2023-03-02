import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
function Rank(props) {
	return (
		<section id='rank'>
			<div className='inner'>
				<div className='wrap'>
					<article>
						<h1>
							<FontAwesomeIcon icon={faStar} />
							<FontAwesomeIcon icon={faStar} />
							<FontAwesomeIcon icon={faStar} />
							<FontAwesomeIcon icon={faStar} />
							<FontAwesomeIcon icon={faStar} />
						</h1>
						<h2>5 Star Rating</h2>
					</article>
					<article>
						<h1>60+</h1>
						<h2>Rank</h2>
					</article>
					<article>
						<h1>122+</h1>
						<h2>Rank</h2>
					</article>
					<article>
						<h1>08</h1>
						<h2>Rank</h2>
					</article>
					<article>
						<h1>10</h1>
						<h2>Rank</h2>
					</article>
				</div>
			</div>
		</section>
	);
}

export default Rank;
