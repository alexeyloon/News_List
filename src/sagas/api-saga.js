// eslint-disable-next-line import/no-extraneous-dependencies
import {
  takeLatest,
  call,
  put,
  select,
} from 'redux-saga/effects';
import { fetchNews } from '../redux/apis';
import { getNewsSuccess, getNewsError } from '../redux/News/news.actions';

// function* getNewsSaga(action) {
//   try {
//     // eslint-disable-next-line no-use-before-define
//     const payload = yield call(fetchNews);
//     yield put({ type: 'GET_NEWS_SUCCESS', payload });
//   } catch (e) {
//     yield put({ type: 'GET_NEWS_ERROR' });
//   }
// }
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

export default function* watcherSaga() {
  // eslint-disable-next-line no-use-before-define
  yield takeLatest('GET_NEWS_REQUEST', getNewsSaga);
}
