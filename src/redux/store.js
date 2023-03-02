import createSageMiddleware from '@redux-saga/core';
import { applyMiddleware, createStore } from 'redux';
import reducers from './reducer';
import rootSaga from './saga';
const sageMiddleware = createSageMiddleware();

const store = createStore(reducers, applyMiddleware(sageMiddleware));

sageMiddleware.run(rootSaga);

export default store;
