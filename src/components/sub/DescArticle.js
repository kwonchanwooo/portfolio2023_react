import {
	faHotTubPerson,
	faMugSaucer,
	faSmoking,
	faUtensils,
	faWifi,
	faWind,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
function DescArticle(props) {
	return (
		<article className='DescArticle on'>
			<div className='right'>
				<span>
					Free WIFI
					<FontAwesomeIcon icon={faWifi} />
				</span>
				<span>
					No smoking <FontAwesomeIcon icon={faSmoking} />
				</span>
				<span>
					Aircondition <FontAwesomeIcon icon={faWind} />
				</span>
			</div>
			<div className='left'>
				<span>
					Breakfast
					<FontAwesomeIcon icon={faMugSaucer} />
				</span>
				<span>
					Tub
					<FontAwesomeIcon icon={faHotTubPerson} />
				</span>

				<span>
					Restaurant
					<FontAwesomeIcon icon={faUtensils} />
				</span>
			</div>
		</article>
	);
}

export default DescArticle;
