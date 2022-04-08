import {
  GET_NEWS_SUCCESS,
  GET_NEWS_ERROR,
  GET_NEWS_REQUEST,
  SET_CURRENT_PAGE,
  GET_NEWS_RECORD_REQUEST,
  GET_NEWS_RECORD_SUCCESS,
  GET_NEWS_RECORD_ERROR,
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

export const deleteNewsRecordRequest = (id) => ({
  type: DELETE_NEWS_RECORD_REQUEST, id,
});

export const deleteNewsRecordSuccess = (payload) => ({
  type: DELETE_NEWS_RECORD_SUCCESS,
  payload,
});

export const deleteNewsRecordError = () => ({
  type: DELETE_NEWS_RECORD_ERROR,
});

export const cleanNewsRecordRequest = (id) => ({
  type: CLEAN_NEWS_RECORD_REQUEST, id,
});

export const cleanNewsRecordSuccess = (payload) => ({
  type: CLEAN_NEWS_RECORD_SUCCESS,
  payload,
});

export const cleanNewsRecordError = () => ({
  type: CLEAN_NEWS_RECORD_ERROR,
});

export const addNewsRecordRequest = (id) => ({
  type: ADD_NEWS_RECORD_REQUEST, id,
});

export const addNewsRecordSuccess = (payload) => ({
  type: ADD_NEWS_RECORD_SUCCESS,
  payload,
});

export const addNewsRecordError = () => ({
  type: ADD_NEWS_RECORD_ERROR,
});
