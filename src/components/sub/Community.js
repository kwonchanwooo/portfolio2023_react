import React, { useEffect, useRef, useState } from 'react';
import Layout from '../commoon/Layout';

function Community(props) {
	const input = useRef(null);
	const textarea = useRef(null);
	const [posts, setPosts] = useState([]);
	const resetForm = () => {
		input.current.value = '';
		textarea.current.value = '';
	};
	const createPost = () => {
		if (!input.current.value.trim() || !textarea.current.value.trim()) {
			resetForm();
			return alert('제목과 본문을 모두 입력하세요.');
		}
		setPosts([{ title: input.current.value, content: textarea.current.value }, ...posts]);
		resetForm();
	};
	const deletePost = (index) => {
		if (!window.confirm('해당 게시글을 삭제하겠습니까?')) return;
		setPosts(posts.filter((_, idx) => idx !== index));
	};

	useEffect(() => {
		console.log(posts);
	}, [posts]);

	return (
		<Layout name={'Community'}>
			<p>Community Content</p>
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

			<div className='showBox'>
				{posts.map((post, idx) => {
					return (
						<article key={idx}>
							<div className='txt'>
								<h2>{post.title}</h2>
								<p>{post.content}</p>
							</div>

							<div className='btnSet'>
								<button>EDIT</button>
								<button onClick={() => deletePost(idx)}>DELETE</button>
							</div>
						</article>
					);
				})}
			</div>
		</Layout>
	);
}

export default Community;
