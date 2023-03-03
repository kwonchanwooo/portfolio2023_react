import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchFlickr = createAsyncThunk('flickr/requestFlickr', async (opt) => {
	const baseURL = 'https://www.flickr.com/services/rest/?format=json&nojsoncallback=1';
	const key = 'ae5dbef0587895ed38171fcda4afb648';
	const method_getPhotos = 'flickr.galleries.getPhotos';
	const restgal = '72157721476189071';
	const bargal = '72157721524655065';
	const spagal = '72157721470708003';
	const banqgal = '72157721476188121';
	const method_user = 'flickr.people.getPhotos';
	const method_search = 'flickr.photos.search';

	const per_page = 20;
	let url = '';

	if (opt.type === 'BANQUET')
		url = `${baseURL}&api_key=${key}&method=${method_getPhotos}&gallery_id=${banqgal}&per_page=${per_page}`;

	if (opt.type === 'BAR')
		url = `${baseURL}&api_key=${key}&method=${method_getPhotos}&gallery_id=${bargal}&per_page=${per_page}`;
	if (opt.type === 'SPA')
		url = `${baseURL}&api_key=${key}&method=${method_getPhotos}&gallery_id=${spagal}&per_page=${per_page}`;
	if (opt.type === 'RESTAURANT')
		url = `${baseURL}&api_key=${key}&method=${method_getPhotos}&gallery_id=${restgal}&per_page=${per_page}`;

	if (opt.type === 'search')
		url = `${baseURL}&api_key=${key}&method=${method_search}&per_page=${per_page}&tags=${opt.tags}`;

	if (opt.type === 'user')
		url = `${baseURL}&api_key=${key}&method=${method_user}&per_page=${per_page}&user_id=${opt.user}`;

	const response = await axios.get(url);
	return response.data.photos.photo;
});

const flickrSlice = createSlice({
	name: 'flickr',
	initialState: {
		data: [],
		isLoading: false,
	},
	extraReducers: {
		[fetchFlickr.pending]: (state) => {
			state.isLoading = true;
		},
		[fetchFlickr.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.data = action.payload;
		},
		[fetchFlickr.rejected]: (state, action) => {
			state.isLoading = false;
			state.data = action.payload;
		},
	},
});

export default flickrSlice.reducer;
