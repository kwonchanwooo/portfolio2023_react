import axios from 'axios';

export const fetchVideo = async () => {
	const key = 'AIzaSyA-UYRzqSCi4U5kxVd_JZ2vPlyksDRJJiQ';
	const playlistId = 'PLqxc4-9rluJ8Ks1sNOzeOADYOJLCLzfiR';
	const num = 6;
	const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlistId}&maxResults=${num}`;

	return await axios.get(url);
};
