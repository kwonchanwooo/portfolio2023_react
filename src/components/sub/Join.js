import React from 'react';
import Layout from '../commoon/Layout';

function Join(props) {
	return (
		<Layout name={'Join'}>
			<form>
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
									<input type='text' name='userid' id='userid' placeholder='아이디를 입력하세요' />
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
									/>
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
									/>
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
									/>
								</td>
							</tr>
							<tr>
								<th scope='row'>
									<label htmlFor='country'>Country</label>
								</th>
								<td>
									<select name='country' id='country'>
										<option value=''>선택하세요</option>
										<option value='korea '>대한민국</option>
										<option value='usa'>미국</option>
										<option value='japan '>일본</option>
										<option value='china'>중국</option>
									</select>
								</td>
							</tr>
							<tr>
								<th scope='row'>
									<label htmlFor='adr'></label> Address
								</th>
								<td>
									<input type='text' name='adr' id='adr' placeholder='시/군/구를 적어주세요' />
									<input
										type='text'
										name='adr2'
										id='adr2'
										placeholder='아파트주소를 적어주세요 (선택)'
									/>
								</td>
							</tr>
							<tr>
								<th scope='row'>
									<label htmlFor='zip'></label> ZIP-CODE
								</th>
								<td>
									<input type='text' name='zip' id='zip' placeholder='우편번호를 적어주세요' />
								</td>
							</tr>
							<tr>
								<th scope='row'>Gender</th>
								<td>
									<label htmlFor='male'>Male</label>
									<input type='radio' name='gender' id='male' value='male' />
									<label htmlFor='female'>Female</label>
									<input type='radio' name='gender' id='female' value='female' />
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
									></textarea>
								</td>
							</tr>

							<tr>
								<th colSpan='2'>
									<input type='reset' value='cancel' />

									<input type='submit' value='submit' />
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
