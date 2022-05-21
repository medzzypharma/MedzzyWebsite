import loaderActionTypes from '../actionTypes/loader-actionTypes';

const initialState = {
  loading: null,
};

export default function loaderReducer(state = initialState, action) {
  const {type} = action;
  switch (type) {
    case loaderActionTypes.LOADING_START:
      return {
        ...state,
        loading: true,
      };
    case loaderActionTypes.LOADING_END:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
