import { createSlice } from '@reduxjs/toolkit';

export const menuSlice = createSlice({
	name: 'menu',
	initialState: {
		open: false,
	},
	reducers: {
		close: (state) => {
			state.opne = false;
		},
		toggle: (state) => {
			state.open = !state.open;
		},
	},
});

export const { close, toggle } = menuSlice.actions;
export default menuSlice.reducer;
