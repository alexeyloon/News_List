import { combineReducers } from 'redux';
// eslint-disable-next-line import/named
import newsReducer from './News/news.reducer';

const rootReducer = combineReducers({
  news: newsReducer,
});

export default rootReducer;
