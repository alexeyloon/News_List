import {
  GET_NEWS_SUCCESS,
  GET_NEWS_ERROR,
  GET_NEWS_REQUEST,
  SET_CURRENT_PAGE,
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
