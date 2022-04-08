// eslint-disable-next-line import/no-extraneous-dependencies
import {
  takeLatest,
  call,
  put,
  select,
} from 'redux-saga/effects';
import {
  fetchNews, fetchNewsRecord, fetchNewsDelete, fetchAddNews,
} from '../redux/apis';
import {
  getNewsSuccess,
  getNewsError,
  getNewsRecordSuccess,
  getNewsRecordError,
  setCurrentPage,
  addNewsRecordError,
  addNewsRecordSuccess,
  deleteNewsRecordSuccess,
  deleteNewsRecordError,
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

function* deleteNewsRecordSaga(action) {
  try {
    const newsList = yield select((state) => state.news.newsList);
    const totalPages = yield select((state) => state.news.totalPages);

    yield call(fetchNewsDelete, action.id);
    if (newsList.length === 1) {
      yield put(setCurrentPage(totalPages - 1));
    }

    const currentPage = yield select((state) => state.news.currentPage);
    const limit = yield select((state) => state.news.limit);
    const payload = yield call(fetchNews, { page: currentPage, limit });

    yield put(deleteNewsRecordSuccess(payload));
  } catch (error) {
    yield put(deleteNewsRecordError());
  }
}

function* addNewsRecordSaga(action) {
  try {
    const newsList = yield select((state) => state.news.newsList);
    const totalPages = yield select((state) => state.news.totalPages);

    yield call(fetchAddNews, action.id);
    if (newsList.length === 3) {
      yield put(setCurrentPage(totalPages + 1));
    }

    const currentPage = yield select((state) => state.news.currentPage);
    const limit = yield select((state) => state.news.limit);
    const payload = yield call(fetchNews, { page: currentPage, limit });

    yield put(addNewsRecordSuccess(payload));
    yield put(getNewsRecordSuccess(payload));
  } catch (error) {
    yield put(addNewsRecordError());
  }
}

export default function* watcherSaga() {
  yield takeLatest('GET_NEWS_REQUEST', getNewsSaga);
  yield takeLatest('GET_NEWS_RECORD_REQUEST', getNewsRecordSaga);
  yield takeLatest('DELETE_NEWS_RECORD_REQUEST', deleteNewsRecordSaga);
  yield takeLatest('ADD_NEWS_RECORD_REQUEST', addNewsRecordSaga);
}
