import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faBus, faCar, faEnvelope, faLocationDot, faPhone, faSubway } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import Layout from '../commoon/Layout';
function Community() {
	const getLocalData = () => {
		const data = localStorage.getItem('post');
		return JSON.parse(data);
	};

	const input = useRef(null);
	const textarea = useRef(null);
	const inputEdit = useRef(null);
	const textareaEdit = useRef(null);
	const [Posts, setPosts] = useState(getLocalData());
	const [Allowed, setAllowed] = useState(true);

	const resetForm = () => {
		input.current.value = '';
		textarea.current.value = '';
	};

	const createPost = () => {
		if (!input.current.value.trim() || !textarea.current.value.trim()) {
			resetForm();
			return alert('제목과 본문을 모두 입력하세요.');
		}
		setPosts([{ title: input.current.value, content: textarea.current.value }, ...Posts]);
		resetForm();
	};

	const deletePost = (delIndex) => {
		if (!window.confirm('해당 게시글을 삭제하겠습니까?')) return;
		setPosts(Posts.filter((_, postIndex) => postIndex !== delIndex));
	};

	const enableUpdate = (editIndex) => {
		if (!Allowed) return;
		setPosts(
			Posts.map((post, postIndex) => {
				if (postIndex === editIndex) post.enableUpdate = true;
				return post;
			})
		);

		setAllowed(false);
	};

	const disableUpdate = (editIndex) => {
		setPosts(
			Posts.map((post, postIndex) => {
				if (postIndex === editIndex) post.enableUpdate = false;
				return post;
			})
		);
		setAllowed(true);
	};

	const updatePost = (updateIndex) => {
		if (!inputEdit.current.value.trim() || !textareaEdit.current.value.trim()) {
			return alert('수정할 제목과 본문을 모두 입력하세요.');
		}

		setPosts(
			Posts.map((post, postIndex) => {
				if (postIndex === updateIndex) {
					post.title = inputEdit.current.value;
					post.content = textareaEdit.current.value;
					post.enableUpdate = false;
				}
				return post;
			})
		);

		setAllowed(true);
	};

	useEffect(() => {
		localStorage.setItem('post', JSON.stringify(Posts));
	}, [Posts]);

	const option = useRef(null);
	const info = useRef(null);
	const container = useRef(null);
	const { kakao } = window;
	info.current = [
		{
			title: '서울 이태원점',
			latlng: new kakao.maps.LatLng(37.5347906, 126.9935937),
			imgUrl: `${process.env.PUBLIC_URL}/img/marker.png`,
			imgSize: new kakao.maps.Size(200, 80),
			imgPos: { offset: new kakao.maps.Point(100, 80) },
		},
		{
			title: '대구 수성못점',
			latlng: new kakao.maps.LatLng(35.8252327, 128.6203849),
			imgUrl: `${process.env.PUBLIC_URL}/img/marker.png`,
			imgSize: new kakao.maps.Size(200, 80),
			imgPos: { offset: new kakao.maps.Point(100, 80) },
		},
	];

	const [index, setIndex] = useState(0);

	option.current = {
		center: info.current[index].latlng,
		level: 3,
	};
	const imageSrc = info.current[index].imgUrl;
	const imageSize = info.current[index].imgSize;
	const imageOption = info.current[index].imgPos;
	const markerPosition = option.current.center;

	const markerImage = useMemo(
		() => new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
		[kakao, imageSrc, imageSize, imageOption]
	);

	const mapTypeControl = useMemo(() => new kakao.maps.MapTypeControl(), [kakao]);
	const zoomControl = useMemo(() => new kakao.maps.ZoomControl(), [kakao]);

	const marker = useMemo(() => {
		return new kakao.maps.Marker({
			position: markerPosition,
			image: markerImage,
		});
	}, [kakao, markerPosition, markerImage]);

	useEffect(() => {
		container.current.innerHTML = '';
		const map = new kakao.maps.Map(container.current, option.current);
		marker.setMap(map);

		map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
		map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

		const setCenter = () => {
			map.setCenter(info.current[index].latlng);
		};

		map.setZoomable(false);
		window.addEventListener('resize', setCenter);

		return () => {
			window.removeEventListener('resize', setCenter);
		};
	}, [index, kakao, mapTypeControl, marker, zoomControl]);

	return (
		<Layout name={'Contact'}>
			<div className='Location'>
				<h1>Contact Us</h1>
				<p>
					Hello. This page introduces the hotel location. The hotel is situated in a convenient location, with many attractions
					and shopping malls nearby. We also introduce you to the transportation options that you can easily access from the
					hotel. If you want to know more about the location, please check out the map below.
				</p>

				<div id='map' ref={container}></div>
				<nav>
					<ul className='branch'>
						{info.current.map((el, idx) => {
							return (
								<li
									key={idx}
									className={idx === index ? 'on' : ''}
									onClick={() => {
										setIndex(idx);
									}}
								>
									{el.title}
								</li>
							);
						})}
					</ul>
				</nav>
			</div>
			<div className='box'>
				<div className='inputBox'>
					<h2>Post</h2>
					<input type='text' placeholder='제목을 입력하세요' ref={input} />
					<br />
					<textarea cols='30' rows='3' placeholder='본문을 입력하세요.' ref={textarea}></textarea>
					<br />

					<div className='btnSet'>
						<button onClick={resetForm}>CANCEL</button>
						<button onClick={createPost}>WRITE</button>
					</div>
				</div>
				<div className='way'>
					{index === 0 ? <h2>서울 이태원점</h2> : <h2>대구 수성못점</h2>}
					<div className='adr'>
						<FontAwesomeIcon icon={faLocationDot} />
						{index === 0 ? <p> 서울특별시 용산구 이태원1동 이태원로 179</p> : <p>대구광역시 수성구 용학로 106-7</p>}
					</div>
					<div className='adr'>
						<FontAwesomeIcon icon={faEnvelope} />
						{index === 0 ? <p> cozyitw@abcde.net</p> : <p> cozyssm@cdefg.com</p>}
					</div>{' '}
					<div className='adr'>
						<FontAwesomeIcon icon={faPhone} />
						{index === 0 ? <p> +82 0212345678</p> : <p>+82 0531234567</p>}
					</div>{' '}
					<div className='adr'>
						<FontAwesomeIcon icon={faInstagram} />
						{index === 0 ? <p> @thecozyITW</p> : <p> @thecozyDG</p>}
					</div>
					<div className='link'>
						{index === 0 ? (
							<ul>
								<a
									href='https://map.naver.com/v5/directions/-/14136867.238596726,4513924.09001781,%ED%95%B4%EB%B0%80%ED%86%A4%20%ED%98%B8%ED%85%94,11579381,PLACE_POI/-/transit?c=15,0,0,0,dh'
									target='_blank'
									rel='noopener noreferrer'
								>
									<li>
										<FontAwesomeIcon icon={faBus} />
									</li>
								</a>
								<a
									href='https://map.naver.com/v5/directions/-/14136867.238596726,4513924.09001781,%ED%95%B4%EB%B0%80%ED%86%A4%20%ED%98%B8%ED%85%94,11579381,PLACE_POI/-/transit?c=15,0,0,0,dh'
									target='_blank'
									rel='noopener noreferrer'
								>
									<li>
										<FontAwesomeIcon icon={faSubway} />
									</li>
								</a>

								<a
									href='https://map.naver.com/v5/directions/-/14136867.238613646,4513924.090092534,%ED%95%B4%EB%B0%80%ED%86%A4%20%ED%98%B8%ED%85%94,11579381,PLACE_POI/-/car?c=15,0,0,0,dh'
									target='_blank'
									rel='noopener noreferrer'
								>
									<li>
										<FontAwesomeIcon icon={faCar} />
									</li>
								</a>
							</ul>
						) : (
							<ul>
								<a
									href='https://map.naver.com/v5/directions/-/14317822.035730485,4276402.693211922,%ED%98%B8%ED%85%94%EC%88%98%EC%84%B1,11658960,PLACE_POI/-/transit?c=15,0,0,0,dh'
									target='_blank'
									rel='noopener noreferrer'
								>
									<li>
										<FontAwesomeIcon icon={faBus} />
									</li>
								</a>
								<a
									href='https://map.naver.com/v5/directions/-/14317822.035730485,4276402.693211922,%ED%98%B8%ED%85%94%EC%88%98%EC%84%B1,11658960,PLACE_POI/-/transit?c=15,0,0,0,dh'
									target='_blank'
									rel='noopener noreferrer'
								>
									<li>
										<FontAwesomeIcon icon={faSubway} />
									</li>
								</a>

								<a
									href='https://map.naver.com/v5/directions/-/14317822.035785254,4276402.693350356,%ED%98%B8%ED%85%94%EC%88%98%EC%84%B1,11658960,PLACE_POI/-/car?c=15,0,0,0,dh'
									target='_blank'
									rel='noopener noreferrer'
								>
									<li>
										<FontAwesomeIcon icon={faCar} />
									</li>
								</a>
							</ul>
						)}
					</div>
				</div>
			</div>

			<div className='showBox'>
				{Posts.map((post, idx) => {
					return (
						<article key={idx}>
							{post.enableUpdate ? (
								<>
									<div className='txt'>
										<input type='text' defaultValue={post.title} ref={inputEdit} />
										<br />
										<textarea cols='30' rows='3' defaultValue={post.content} ref={textareaEdit}></textarea>
									</div>

									<div className='btnSet'>
										<button onClick={() => disableUpdate(idx)}>CANCEL</button>
										<button onClick={() => updatePost(idx)}>UPDATE</button>
									</div>
								</>
							) : (
								<>
									<div className='txt'>
										<span>{idx + 1}번째 글</span>
										<h2>{post.title}</h2>
										<p>{post.content}</p>
									</div>

									<div className='btnSet'>
										<button onClick={() => enableUpdate(idx)}>EDIT</button>
										<button onClick={() => deletePost(idx)}>DELETE</button>
									</div>
								</>
							)}
						</article>
					);
				})}
			</div>
		</Layout>
	);
}

export default Community;
