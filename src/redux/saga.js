import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import * as types from './actionType';
import { fetchVideo } from './api';

function* callVideo() {
	yield takeLatest(types.VIDEO.start, returnVideo);
}

function* returnVideo() {
	try {
		const response = yield call(fetchVideo);
		yield put({ type: types.VIDEO.success, payload: response.data.items });
	} catch (err) {
		yield put({ type: types.VIDEO.fail, payload: err });
	}
}

function* callFlicker() {
	yield takeLatest(types.FLICKER.start, returnFlicker);
}

function* returnFlicker(action) {
	try {
		const response = yield call(fetchVideo, action.opt);
		yield put({ type: types.FLICKER.success, payload: response.photo.photo });
	} catch (err) {
		yield put({ type: types.FLICKER.fail, payload: err });
	}
}

export default function* rottSaga() {
	yield all([fork(callVideo, callFlicker)]);
}
