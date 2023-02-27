import { combineReducers } from 'redux';

const videoReducer = (state = { video: [] }, action) => {
	switch (action.type) {
		case 'SET_VIDEO':
			return { ...state, video: action.payload };
		default:
			return state;
	}
};

const reducers = combineReducers({ videoReducer });
export default reducers;
