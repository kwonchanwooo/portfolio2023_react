import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
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
			imgSize: new kakao.maps.Size(255, 107),
			imgPos: { offset: new kakao.maps.Point(120, 100) },
		},
		{
			title: '대구 수성못점',
			latlng: new kakao.maps.LatLng(35.8252327, 128.6203849),
			imgUrl: `${process.env.PUBLIC_URL}/img/marker.png`,
			imgSize: new kakao.maps.Size(255, 107),
			imgPos: { offset: new kakao.maps.Point(120, 100) },
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
		<Layout name={'Community'}>
			<div className='Location'>
				<h1>Location</h1>
				<p>
					Hello. This page introduces the hotel location. The hotel is situated in a convenient
					location, with many attractions and shopping malls nearby. We also introduce you to the
					transportation options that you can easily access from the hotel. If you want to know more
					about the location, please check out the map below.
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
						{index === 0 ? (
							<p> 서울특별시 용산구 이태원1동 이태원로 179</p>
						) : (
							<p>대구광역시 수성구 용학로 106-7</p>
						)}
					</div>

					{/* <div className='bus'>
						<div className='img'>
							<FontAwesomeIcon icon={faBus} />
						</div>
						{index === 0 ? (
							<p>
								<ul>
									<li>해밀튼호텔 정류장 - 간선 110A, 110B, 421</li>
									<li>보광동입구 정류장 - 간선 400, 405, 421</li>
									<li>이태원역앞 정류장 - 용산01</li>
								</ul>
							</p>
						) : (
							<p>
								<ul>
									<li>수성못 건너역 정류장 - 401, 814</li>
									<li>불교한방병원 정류장 - 410</li>
								</ul>
							</p>
						)}
					</div>
					<div className='train'>
						<div className='img'>
							<FontAwesomeIcon icon={faSubway} />
						</div>
						{index === 0 ? (
							<p>6호선 이태원역 1, 2번 출구 도보 1분</p>
						) : (
							<p>3호선 수성못(TBC)역 2번출구 도보 15분 </p>
						)}
					</div>
					<div className='car'>
						<div className='img'>
							<FontAwesomeIcon icon={faParking} />
						</div>
						{index === 0 ? (
							<p>객실 투숙객은 객실당 차량 1대만 무료로 이용 가능</p>
						) : (
							<p>객실 투숙객은 객실당 차량 1대만 무료로 이용 가능</p>
						)}
					</div> */}
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
										<textarea
											cols='30'
											rows='3'
											defaultValue={post.content}
											ref={textareaEdit}
										></textarea>
									</div>

									<div className='btnSet'>
										<button onClick={() => disableUpdate(idx)}>CANCEL</button>
										<button onClick={() => updatePost(idx)}>UPDATE</button>
									</div>
								</>
							) : (
								<>
									<div className='txt'>
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
