import userActionTypes from "../actionTypes/user-actionTypes";
const initialState = {
  user: null,
  error: "",
  orders: null,
  isUserExists: false,
  staticConfigDataObj: null,
  orderSuccess: false,
  location: null,
  searched: null,
};

export default function userReducer(state = initialState, action) {
  const { type, response, error } = action;
  console.log(type, response, error);
  switch (type) {
    case userActionTypes.USER_LOGIN_SUCCESS:
      return {
        ...state,
        user: response,
        error: "",
      };
    case userActionTypes.USER_LOGIN_FAILURE:
      return {
        ...state,
        error,
      };

    case userActionTypes.ALL_USER_ORDERS_SUCCESS:
      return {
        ...state,
        orders: response?.orders,
        error: "",
      };
    case userActionTypes.ALL_USER_ORDERS_FAILURE:
      return {
        ...state,
        error,
      };

    case userActionTypes.SEARCH_SUCCESS:
      return {
        ...state,
        searched: response,
      };
    case userActionTypes.SEARCH_FAILURE:
      return {
        ...state,
        error,
      };

    case userActionTypes.RESET_ORDER:
      return {
        ...state,
        searched: [],
      };

    case userActionTypes.USER_EXISTS_SUCCESS:
      return {
        ...state,
        isUserExists: response,
      };
    case userActionTypes.USER_EXISTS_FAILURE:
      return {
        ...state,
        isUserExists: false,
      };

    case userActionTypes.CONFIG_DATA_SUCCESS:
      return {
        ...state,
        user: response?.user,
        orders: response?.orders,
      };

    case userActionTypes.CONFIG_DATA_FAILURE:
      return {
        ...state,
        staticConfigDataObj: null,
        error,
      };

    case userActionTypes.STATIC_CONFIG_DATA_SUCCESS:
      return {
        ...state,
        staticConfigDataObj: {
          highSellingMeds: response?.highSellingMeds,
          categories: response?.categories,
        },
      };

    case userActionTypes.STATIC_CONFIG_DATA_FAILURE:
      return {
        ...state,
        staticConfigDataObj: null,
        error,
      };

    case userActionTypes.RESET_REDUCER:
      return {
        ...state,
        user: null,
        error: "",
        isUserExists: false,
        staticConfigDataObj: null,
      };

    case userActionTypes.ADD_PRESCRIPTION_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          prescriptions: response,
        },
        error: "",
      };

    case userActionTypes.ADD_PRESCRIPTION_FAILURE:
      return {
        ...state,
        error,
      };

    case userActionTypes.UPDATE_USER_SUCCESS:
      return {
        ...state,
        error: "",
        user: response,
      };

    case userActionTypes.UPDATE_USER_FAILURE:
      return {
        ...state,
        error,
      };

    case userActionTypes.ADD_ORDER_SUCCESS:
      return {
        ...state,
        error: "",
        orderSuccess: true,
      };

    case userActionTypes.ADD_ORDER_FAILURE:
      return {
        ...state,
        error,
      };

    case userActionTypes.UPDATE_REDUCER:
      return {
        ...state,
        [response?.key]: response?.value,
      };

    default:
      return state;
  }
}
