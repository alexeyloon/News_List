// eslint-disable-next-line import/no-extraneous-dependencies
import {
  takeLatest,
  call,
  put,
  select,
} from 'redux-saga/effects';
import { fetchNews, fetchNewsRecord } from '../redux/apis';
import {
  getNewsSuccess, getNewsError, getNewsRecordSuccess, getNewsRecordError,
} from '../redux/News/news.actions';

function* getNewsSaga() {
  try {
    const currentPage = yield select((state) => state.news.currentPage);
    const limit = yield select((state) => state.news.limit);
    const payload = yield call(fetchNews, {
      page: currentPage,
      limit,
    });

    yield put(getNewsSuccess(payload));
  } catch (e) {
    yield put(getNewsError());
  }
}

function* getNewsRecordSaga(action) {
  try {
    const payload = yield call(fetchNewsRecord, action.id);

    yield put(getNewsRecordSuccess(payload));
  } catch (e) {
    yield put(getNewsRecordError());
  }
}

export default function* watcherSaga() {
  // eslint-disable-next-line no-use-before-define
  yield takeLatest('GET_NEWS_REQUEST', getNewsSaga);
  yield takeLatest('GET_NEWS_RECORD_REQUEST', getNewsRecordSaga);
}
