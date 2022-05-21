import {
  _addOrder,
  _addPrescription,
  _configData,
  _updateUser,
  _userExists,
  _userLogin,
  _staticConfigData,
  _allUserOrder,
  _searchProducts,
} from "../../services/user";
import loaderActionTypes from "../actionTypes/loader-actionTypes";
import userActionTypes from "../actionTypes/user-actionTypes";

export const userExists = (data) => (dispatch) => {
  dispatch({
    type: loaderActionTypes.LOADING_START,
  });

  _userExists(data)
    .then((response) => {
      if (response?.error) {
        dispatch({
          type: userActionTypes.USER_EXISTS_FAILURE,
          error: response?.meta?.message,
        });
      } else {
        dispatch({
          type: userActionTypes.USER_EXISTS_SUCCESS,
          response: response?.data?.exists,
        });
      }
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: userActionTypes.USER_EXISTS_FAILURE,
        error,
      });
    })
    .finally(() => {
      dispatch({
        type: loaderActionTypes.LOADING_END,
      });
    });
};

export const userLogin = (data) => (dispatch) => {
  dispatch({
    type: loaderActionTypes.LOADING_START,
  });

  _userLogin(data)
    .then((response) => {
      if (response?.error) {
        dispatch({
          type: userActionTypes.USER_LOGIN_FAILURE,
          error: response?.meta?.message,
        });
      } else {
        dispatch({
          type: userActionTypes.USER_LOGIN_SUCCESS,
          response: response?.data,
        });
      }
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: userActionTypes.USER_LOGIN_FAILURE,
        error,
      });
    })
    .finally(() => {
      dispatch({
        type: loaderActionTypes.LOADING_END,
      });
    });
};

export const configData = (data) => (dispatch) => {
  dispatch({
    type: loaderActionTypes.LOADING_START,
  });

  _configData(data)
    .then((response) => {
      console.log(response);
      if (response?.error) {
        dispatch({
          type: userActionTypes.CONFIG_DATA_FAILURE,
          error: response?.meta?.message,
        });
      } else {
        dispatch({
          type: userActionTypes.CONFIG_DATA_SUCCESS,
          response: response?.data,
        });
      }
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: userActionTypes.CONFIG_DATA_FAILURE,
        error,
      });
    })
    .finally(() => {
      if (data?.endLoading) {
        dispatch({
          type: loaderActionTypes.LOADING_END,
        });
      }
    });
};

export const addPrescription = (data) => (dispatch) => {
  dispatch({
    type: loaderActionTypes.LOADING_START,
  });

  _addPrescription(data)
    .then((response) => {
      console.log(response);
      if (response?.meta?.message !== "Success") {
        dispatch({
          type: userActionTypes.ADD_PRESCRIPTION_FAILURE,
          error: response?.meta?.message,
        });
      } else {
        dispatch({
          type: userActionTypes.ADD_PRESCRIPTION_SUCCESS,
          response: response?.data,
        });
      }
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: userActionTypes.ADD_PRESCRIPTION_FAILURE,
        error,
      });
    })
    .finally(() => {
      dispatch({
        type: loaderActionTypes.LOADING_END,
      });
    });
};

export const updateUser = (data) => (dispatch) => {
  dispatch({
    type: loaderActionTypes.LOADING_START,
  });

  _updateUser(data)
    .then((response) => {
      console.log(response);
      if (response?.meta?.message !== "Success") {
        dispatch({
          type: userActionTypes.UPDATE_USER_FAILURE,
          error: response?.meta?.message,
        });
      } else {
        dispatch({
          type: userActionTypes.UPDATE_USER_SUCCESS,
          response: response?.data,
        });
      }
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: userActionTypes.UPDATE_USER_FAILURE,
        error,
      });
    })
    .finally(() => {
      dispatch({
        type: loaderActionTypes.LOADING_END,
      });
    });
};

export const addOrder = (data) => (dispatch) => {
  dispatch({
    type: loaderActionTypes.LOADING_START,
  });

  _addOrder(data)
    .then((response) => {
      console.log(response);
      if (response?.meta?.message !== "Success") {
        dispatch({
          type: userActionTypes.ADD_ORDER_FAILURE,
          error: response?.meta?.message,
        });
      } else {
        dispatch({
          type: userActionTypes.ADD_ORDER_SUCCESS,
          response: response?.data,
        });
      }
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: userActionTypes.ADD_ORDER_FAILURE,
        error,
      });
    })
    .finally(() => {
      dispatch({
        type: loaderActionTypes.LOADING_END,
      });
    });
};

export const allUserOrder = (data) => (dispatch) => {
  _allUserOrder(data)
    .then((response) => {
      console.log(response);
      if (response?.meta?.message !== "Success") {
        dispatch({
          type: userActionTypes.ALL_USER_ORDERS_FAILURE,
          error: response?.meta?.message,
        });
      } else {
        dispatch({
          type: userActionTypes.ALL_USER_ORDERS_SUCCESS,
          response: response?.data,
        });
      }
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: userActionTypes.ALL_USER_ORDERS_FAILURE,
        error,
      });
    })
    .finally(() => {});
};

export const staticConfigData = (data) => (dispatch) => {
  dispatch({
    type: loaderActionTypes.LOADING_START,
  });

  _staticConfigData(data)
    .then((response) => {
      console.log(response);
      if (response?.meta?.message !== "Success") {
        dispatch({
          type: userActionTypes.STATIC_CONFIG_DATA_FAILURE,
          error: response?.meta?.message,
        });
      } else {
        dispatch({
          type: userActionTypes.STATIC_CONFIG_DATA_SUCCESS,
          response: response?.data,
        });
      }
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: userActionTypes.STATIC_CONFIG_DATA_FAILURE,
        error,
      });
    })
    .finally(() => {
      dispatch({
        type: loaderActionTypes.LOADING_END,
      });
    });
};

export const searchProducts = (data) => (dispatch) => {
  dispatch({
    type: loaderActionTypes.LOADING_START,
  });

  _searchProducts(data)
    .then((response) => {
      // console.log(response);
      if (response?.meta?.message !== "Success") {
        dispatch({
          type: userActionTypes.SEARCH_FAILURE,
          error: response?.meta?.message,
        });
      } else {
        dispatch({
          type: userActionTypes.SEARCH_SUCCESS,
          response: response?.data,
        });
      }
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: userActionTypes.SEARCH_FAILURE,
        error,
      });
    })
    .finally(() => {
      dispatch({
        type: loaderActionTypes.LOADING_END,
      });
    });
};

export const resetReducer = () => ({
  type: userActionTypes.RESET_REDUCER,
});

export const resetOrders = () => ({
  type: userActionTypes.RESET_ORDER,
});

export const updateReducer = (response) => ({
  type: userActionTypes.UPDATE_REDUCER,
  response,
});
