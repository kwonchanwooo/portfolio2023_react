import { combineReducers } from 'redux';
import * as types from './actionType';

const videoReducer = (state = { video: [] }, action) => {
	switch (action.type) {
		case types.VIDEO.start:
			return state;
		case types.VIDEO.success:
			return { ...state, video: action.payload };
		case types.VIDEO.fail:
			return { ...state, video: action.payload };
		default:
			return state;
	}
};

const flickerReducer = (state = { flicker: [] }, action) => {
	switch (action.type) {
		case types.FLICKER.start:
			return state;
		case types.FLICKER.success:
			return { ...state, flicker: action.payload };
		case types.FLICKER.fail:
			return { ...state, flicker: action.payload };
		default:
			return state;
	}
};
const reducers = combineReducers({ videoReducer, flickerReducer });
export default reducers;
