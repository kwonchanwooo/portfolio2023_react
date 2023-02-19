import {
	faCaretRight,
	faCouch,
	faFaceSmile,
	faHandSparkles,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
function Top(props) {
	return (
		<section id='top'>
			<div class='inner'>
				<div class='wrap'>
					<article>
						<div class='pic'>
							<FontAwesomeIcon icon={faCouch} />
						</div>
						<h1>HOME</h1>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit!</p>
						<a href='#'>
							SHOW MORE <FontAwesomeIcon icon={faCaretRight} />
						</a>
					</article>

					<article>
						<div class='pic'>
							<FontAwesomeIcon icon={faFaceSmile} />
						</div>
						<h1>SMILE</h1>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit!</p>
						<a href='#'>
							SHOW MORE <FontAwesomeIcon icon={faCaretRight} />
						</a>
					</article>

					<article>
						<div class='pic'>
							<FontAwesomeIcon icon={faHandSparkles} />
						</div>
						<h1>CLEAN</h1>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit!</p>
						<a href='#'>
							SHOW MORE <FontAwesomeIcon icon={faCaretRight} />
						</a>
					</article>
				</div>
			</div>
		</section>
	);
}

export default Top;
