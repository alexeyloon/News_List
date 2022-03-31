import {
  GET_NEWS_SUCCESS,
  GET_NEWS_ERROR,
  GET_NEWS_REQUEST,
  SET_CURRENT_PAGE,
  GET_NEWS_RECORD_REQUEST,
  GET_NEWS_RECORD_SUCCESS,
  GET_NEWS_RECORD_ERROR,
} from './news.types';

export const getNewsRequest = () => ({
  type: GET_NEWS_REQUEST,
});

export const getNewsSuccess = (payload) => ({
  type: GET_NEWS_SUCCESS,
  payload,
});

export const getNewsError = () => ({
  type: GET_NEWS_ERROR,
});

export const setCurrentPage = (payload) => ({
  type: SET_CURRENT_PAGE,
  payload,
});
//  getting information about one news item;

export const getNewsRecordRequest = (id) => ({
  type: GET_NEWS_RECORD_REQUEST, id,
});

export const getNewsRecordSuccess = (payload) => ({
  type: GET_NEWS_RECORD_SUCCESS,
  payload,
});

export const getNewsRecordError = () => ({
  type: GET_NEWS_RECORD_ERROR,
});
