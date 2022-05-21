import loaderActionTypes from '../actionTypes/loader-actionTypes';

export const loadingStart = () => ({
  type: loaderActionTypes.LOADING_START,
});

export const loadingEnd = () => ({
  type: loaderActionTypes.LOADING_END,
});
