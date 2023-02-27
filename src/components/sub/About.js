import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../commoon/Layout';

function About(props) {
	const store = useSelector((store) => store);
	console.log(store);
	const dispatch = useDispatch();

	const [Member, setMember] = useState([]);
	useEffect(() => {
		axios.get(`${process.env.PUBLIC_URL}/DB/member.json`).then((json) => {
			setMember(json.data.members);
		});
	}, []);
	useEffect(() => {}, [Member]);
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
