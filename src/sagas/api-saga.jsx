// eslint-disable-next-line import/no-extraneous-dependencies
import { takeEvery, call, put } from 'redux-saga/effects';

export default function* watcherSaga() {
  // eslint-disable-next-line no-use-before-define
  yield takeEvery('DATA_REQUESTED', workerSaga);
}

function* workerSaga() {
  try {
    // eslint-disable-next-line no-use-before-define
    const payload = yield call(getData);
    yield put({ type: 'DATA_LOADED', payload });
  } catch (e) {
    yield put({ type: 'API_ERRORED', payload: e });
  }
}

function getData() {
  // eslint-disable-next-line no-undef
  return fetch('https://jsonplaceholder.typicode.com/posts').then((response) => response.json());
}
