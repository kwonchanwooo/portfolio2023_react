import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchVideo = createAsyncThunk('video/requestVideo', async () => {
	const key = 'AIzaSyA-UYRzqSCi4U5kxVd_JZ2vPlyksDRJJiQ';
	const playlistId = 'PLqxc4-9rluJ8Ks1sNOzeOADYOJLCLzfiR';
	const num = 6;
	const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlistId}&maxResults=${num}`;

	const response = await axios.get(url);
	return response.data.items;
});

const youtubeSlice = createSlice({
	name: 'video',
	initialState: {
		data: [],
		isLoading: false,
	},
	extraReducers: {
		//데이터 요청시작
		[fetchVideo.pending]: (state) => {
			state.isLoading = true;
		},
		//데이터 응답성공
		[fetchVideo.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.data = action.payload;
		},
		//데이터 응답실패
		[fetchVideo.rejected]: (state, action) => {
			state.isLoading = false;
			state.data = action.payload;
		},
	},
});

export default youtubeSlice.reducer;
