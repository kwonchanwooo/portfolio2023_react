import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Layout from '../commoon/Layout';

function About(props) {
	const [Member, setMember] = useState([]);
	useEffect(() => {
		axios.get(`${process.env.PUBLIC_URL}/DB/member.json`).then((json) => {
			setMember(json.data.members);
		});
	}, []);
	useEffect(() => {
		console.log(Member);
	}, [Member]);
	return (
		<Layout name={'About'}>
			{Member.map((el, index) => {
				return (
					<article key={index}>
						<div className='inner'>
							<div className='pic'>
								<img src={`${process.env.PUBLIC_URL}/img/${el.pic}`} alt={el.name} />
							</div>
							<div className='txt'>
								<h3>{el.name}</h3>
								<p>{el.position}</p>
							</div>
						</div>
					</article>
				);
			})}
		</Layout>
	);
}

export default About;
