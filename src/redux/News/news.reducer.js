import {
  GET_NEWS_SUCCESS,
  GET_NEWS_ERROR,
  GET_NEWS_REQUEST,
  SET_CURRENT_PAGE,
  GET_NEWS_RECORD_SUCCESS,
  GET_NEWS_RECORD_ERROR,
  GET_NEWS_RECORD_REQUEST,
  DELETE_NEWS_RECORD_REQUEST,
  DELETE_NEWS_RECORD_SUCCESS,
  DELETE_NEWS_RECORD_ERROR,
  CLEAN_NEWS_RECORD_REQUEST,
  CLEAN_NEWS_RECORD_SUCCESS,
  CLEAN_NEWS_RECORD_ERROR,
  ADD_NEWS_RECORD_REQUEST,
  ADD_NEWS_RECORD_SUCCESS,
  ADD_NEWS_RECORD_ERROR,
} from './news.types';

const INITIAL_STATE = {
  isLoading: false,
  newsAmount: 0,
  newsList: [],
  limit: 3,
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
        newsRecord: action.payload,
      };
    case GET_NEWS_RECORD_ERROR:
      return {
        ...state, isLoading: false,
      };
    case DELETE_NEWS_RECORD_REQUEST:
      return {
        ...state, isLoading: true,
      };
    case DELETE_NEWS_RECORD_SUCCESS:
      return {
        ...state,
        isLoading: false,

        newsRecord: action.payload,

      };
    case DELETE_NEWS_RECORD_ERROR:
      return {
        ...state, isLoading: false,
      };
    case CLEAN_NEWS_RECORD_REQUEST:
      return {
        ...state, isLoading: true,
      };
    case CLEAN_NEWS_RECORD_SUCCESS:
      return {
        ...state,
        isLoading: false,

        newsRecord: action.payload,

      };
    case CLEAN_NEWS_RECORD_ERROR:
      return {
        ...state, isLoading: false,
      };
    case ADD_NEWS_RECORD_REQUEST:
      return {
        ...state, isLoading: true,
      };
    case ADD_NEWS_RECORD_SUCCESS:
      return {
        ...state,
        isLoading: false,

        newsRecord: action.payload,

      };
    case ADD_NEWS_RECORD_ERROR:
      return {
        ...state, isLoading: false,
      };
    default: return state;
  }
};

export default reducer;
