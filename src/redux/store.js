import { createStore, applyMiddleware, compose } from 'redux';

// eslint-disable-next-line import/no-extraneous-dependencies
import createSagaMiddleware from '@redux-saga/core';

import rootReducer from './rootReducer';
import apiSaga from '../sagas/api-saga';

const initialiseSagaMiddleware = createSagaMiddleware();

// eslint-disable-next-line no-undef
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  storeEnhancers(
    applyMiddleware(initialiseSagaMiddleware),
  ),
);

initialiseSagaMiddleware.run(apiSaga);

export default store;
