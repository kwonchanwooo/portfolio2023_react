import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Layout from '../commoon/Layout';

function Join(props) {
	const history = useHistory();
	const initVal = {
		userid: '',
		pwd1: '',
		pwd2: '',
		email: '',
		country: '',
		adr: '',
		zip: '',
		gender: false,
		comments: '',
	};

	const [val, setVal] = useState(initVal);
	const [err, setErr] = useState({});
	const [submit, setSubmit] = useState(false);

	const check = (value) => {
		const errs = {};
		const eng = /[a-zA-Z]/;
		const num = /[0-9]/;
		const spc = /[~!@#$%^&*)]/;

		if (value.userid.length < 7 || !eng.test(value.userid) || !num.test(value.userid)) {
			errs.userid = '아이디를 7글자 이상, 영어, 숫자를 포함하여 입력하세요';
		}

		if (
			value.pwd1.length < 10 ||
			!eng.test(value.pwd1) ||
			!num.test(value.pwd1) ||
			!spc.test(value.pwd1)
		) {
			errs.pwd1 = '비밀번호는 10글자 이상, 영문, 숫자, 특수문자를 모두 포함하세요';
		}
		if (value.pwd1 !== value.pwd2 || !value.pwd2) {
			errs.pwd2 = '두개의 비밀번호를 동일하게 입력하세요';
		}

		if (value.email.length < 8 || !/@/.test(value.email)) {
			errs.email = '이메일은 8글자 이상, @를 포함하세요';
		}

		if (!value.gender) {
			errs.gender = '성별을 선택하세요.';
		}
		if (value.country === '') {
			errs.country = '국적을 선택하세요.';
		}
		if (value.adr.length < 10) {
			errs.adr = '주소를 정확히 기입하세요';
		}
		if (value.zip.length !== 5) {
			errs.zip = '우편번호 5글자를 입력해주세요';
		}
		if (value.comments.length < 20) {
			errs.comments = '남기는 말은 20글자 이상 입력하세요.';
		}

		return errs;
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setVal({ ...val, [name]: value });
	};
	const handleRadio = (e) => {
		const { name } = e.target;
		const isChecked = e.target.checked;
		setVal({ ...val, [name]: isChecked });
	};
	const handleSelect = (e) => {
		const { name } = e.target;
		const selected = e.target.value;
		setVal({ ...val, [name]: selected });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setErr(check(val));
	};

	useEffect(() => {
		const len = Object.keys(err).length;
		if (len === 0 && submit) {
			alert('진심으로 환영합니다!');
			setVal(initVal);
			history.push('/');
		}
	}, [err]);

	return (
		<Layout name={'Join'}>
			<form onSubmit={handleSubmit}>
				<fieldset>
					<legend className='hidden'>회원가입 폼 양식</legend>
					<table>
						<caption className='hidden'>
							회원가입을 위한 아이디, 비밀번호, 이메일, 성별, 학력, 취미, 남기는 말 입력 테이블
						</caption>
						<tbody>
							<tr>
								<th scope='row'>
									<label htmlFor='userid'>User ID</label>
								</th>
								<td>
									<input
										type='text'
										name='userid'
										id='userid'
										placeholder='아이디를 입력하세요'
										onChange={handleChange}
										value={val.userid}
									/>
									<span className='err'>{err.userid}</span>
								</td>
							</tr>

							<tr>
								<th scope='row'>
									<label htmlFor='pwd1'>Password</label>
								</th>
								<td>
									<input
										type='password'
										name='pwd1'
										id='pwd1'
										placeholder='비밀번호를 입력하세요.'
										onChange={handleChange}
										value={val.pwd1}
									/>
									<span className='err'>{err.pwd1}</span>
								</td>
							</tr>
							<tr>
								<th scope='row'>
									<label htmlFor='pwd2'>Re Password</label>
								</th>
								<td>
									<input
										type='password'
										name='pwd2'
										id='pwd2'
										placeholder='비밀번호를 재 입력하세요'
										onChange={handleChange}
										value={val.pwd2}
									/>
									<span className='err'>{err.pwd2}</span>
								</td>
							</tr>
							<tr>
								<th scope='row'>
									<label htmlFor='email'>E-mail</label>
								</th>
								<td>
									<input
										type='text'
										name='email'
										id='email'
										placeholder='이메일주소를 입력하세요'
										onChange={handleChange}
										value={val.email}
									/>
									<span className='err'>{err.email}</span>
								</td>
							</tr>
							<tr>
								<th scope='row'>
									<label htmlFor='country'>Country</label>
								</th>
								<td>
									<select name='country' id='country' onChange={handleSelect}>
										<option value=''>선택하세요</option>
										<option value='korea '>대한민국</option>
										<option value='usa'>미국</option>
										<option value='japan '>일본</option>
										<option value='china'>중국</option>
									</select>
									<span className='err'>{err.country}</span>
								</td>
							</tr>
							<tr>
								<th scope='row'>
									<label htmlFor='adr'></label> Address
								</th>
								<td>
									<input
										type='text'
										name='adr'
										id='adr'
										placeholder='시/군/구를 적어주세요'
										onChange={handleChange}
										value={val.adr}
									/>
									<input
										type='text'
										name='adr2'
										id='adr2'
										placeholder='아파트주소를 적어주세요 (선택)'
									/>
									<span className='err'>{err.adr}</span>
								</td>
							</tr>
							<tr>
								<th scope='row'>
									<label htmlFor='zip'></label> ZIP-CODE
								</th>
								<td>
									<input
										type='text'
										name='zip'
										id='zip'
										placeholder='우편번호를 적어주세요'
										onChange={handleChange}
										value={val.zip}
									/>
									<span className='err'>{err.zip}</span>
								</td>
							</tr>
							<tr>
								<th scope='row'>Gender</th>
								<td>
									<label htmlFor='male'>Male</label>
									<input type='radio' name='gender' id='male' value='male' />
									<label htmlFor='female'>Female</label>
									<input
										type='radio'
										name='gender'
										id='female'
										value='female'
										onChange={handleRadio}
									/>
									<span className='err'>{err.gender}</span>
								</td>
							</tr>

							<tr>
								<th scope='row'>
									<label htmlFor='comments'>Comments</label>
								</th>
								<td>
									<textarea
										name='comments'
										id='comments'
										placeholder='남기는 말을 입력하세요'
										onChange={handleChange}
										value={val.comments}
									></textarea>
									<span className='err'>{err.comments}</span>
								</td>
							</tr>

							<tr>
								<th colSpan='2'>
									<input type='reset' value='cancel' onClick={() => setVal(initVal)} />

									<input type='submit' value='submit' onClick={() => setSubmit(true)} />
								</th>
							</tr>
						</tbody>
					</table>
				</fieldset>
			</form>
			<div className='help'>
				<h1> Contact Us</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quae doloribus
					laudantium cum, nostrum iste veniam minus rerum quasi sed.
				</p>
				<span>
					E-mail : abcdefg@gmail.com
					<br />
					Phone : (+82)10-1234-5678
				</span>
			</div>
		</Layout>
	);
}

export default Join;
