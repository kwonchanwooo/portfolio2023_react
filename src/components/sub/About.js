import axios from 'axios';
import { useEffect, useState } from 'react';
import Layout from '../commoon/Layout';

function About(props) {
	const [Member, setMember] = useState([]);
	useEffect(() => {
		axios.get(`${process.env.PUBLIC_URL}/DB/member.json`).then((json) => {
			setMember(json.data.members);
		});
	}, []);
	useEffect(() => {}, [Member]);

	return (
		<Layout name={'About'}>
			<h2>Team COZY를 소개합니다.</h2>
			<h2>Je vous présente Team COZY.</h2>
			<h1>Let me introduce Team COZY.</h1>
			<h2>Team COZYを紹介します。</h2>
			<h2>介绍一下Team COZY。</h2>
			<p>
				Hello. This page introduces the hotel executives. The executives are at the forefront of the
				hotel industry with their expertise and experience. The executives operate and manage
				various hotels around the world, and strive to provide the best service and comfort to
				customers. The executives play a big role in shaping the future of the hotel industry. If
				you want to know more about them, please click on their profiles below.
			</p>
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
