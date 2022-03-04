import { combineReducers } from 'redux';

import newsReducer from './News/news.reducer';

const rootReducer = combineReducers({

  news: newsReducer,

});

export default rootReducer;
