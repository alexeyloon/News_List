import {
  GET_NEWS_SUCCESS,
  GET_NEWS_ERROR,
  GET_NEWS_REQUEST,
  SET_CURRENT_PAGE,
  GET_NEWS_RECORD_SUCCESS,
  GET_NEWS_RECORD_ERROR,
  GET_NEWS_RECORD_REQUEST,
} from './news.types';

const INITIAL_STATE = {
  isLoading: false,
  newsAmount: 0,
  newsList: [],
  limit: 5,
  totalPages: 1,
  currentPage: 1,
  newsRecord: {},
};

// eslint-disable-next-line default-param-last
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_NEWS_REQUEST:
      return {
        ...state, isLoading: true,
      };
    case GET_NEWS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        newsList: action.payload.items,
        newsAmount: action.payload.count,
        totalPages: Math.ceil(action.payload.count / state.limit),
      };
    case GET_NEWS_ERROR:
      return {
        ...state, isLoading: false,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state, currentPage: action.payload,
      };
    case GET_NEWS_RECORD_REQUEST:
      return {
        ...state, isLoading: true,
      };
    case GET_NEWS_RECORD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        newsList: action.payload.items,
        newsRecord: action.payload.newsRecord,
      };
    case GET_NEWS_RECORD_ERROR:
      return {
        ...state, isLoading: false,
      };
    default: return state;
  }
};

export default reducer;
