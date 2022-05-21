import {fetchPost} from '../utils/fetchPost';
import {fetchGet} from '../utils/fetchGet';
import {ApiConstants, BASE_URL} from '../constants/appConstants';

export const _userExists = async data => {
  return new Promise((resolve, reject) => {
    fetchPost(BASE_URL + ApiConstants.UserExists, data)
      .then(response => {
        console.log(response);
        resolve(response);
      })
      .catch(error => {
        console.log(error);
        reject(error);
      });
  });
};

export const _userLogin = async data => {
  return new Promise((resolve, reject) => {
    fetchPost(BASE_URL + ApiConstants.Login, data)
      .then(response => {
        console.log(response);
        resolve(response);
      })
      .catch(error => {
        console.log(error);
        reject(error);
      });
  });
};

export const _getUser = async query => {
  return new Promise((resolve, reject) => {
    fetchGet(BASE_URL + ApiConstants.GetUser + query)
      .then(response => {
        console.log(response);
        resolve(response);
      })
      .catch(error => {
        console.log(error);
        reject(error);
      });
  });
};

export const _configData = async data => {
  return new Promise((resolve, reject) => {
    fetchPost(BASE_URL + ApiConstants.ConfigData, data)
      .then(response => {
        console.log(response);
        resolve(response);
      })
      .catch(error => {
        console.log(error);
        reject(error);
      });
  });
};

export const _addPrescription = async data => {
  return new Promise((resolve, reject) => {
    fetchPost(BASE_URL + ApiConstants.AddPrescription, data, true)
      .then(response => {
        console.log(response);
        resolve(response);
      })
      .catch(error => {
        console.log(error);
        reject(error);
      });
  });
};

export const _updateUser = async data => {
  return new Promise((resolve, reject) => {
    fetchPost(BASE_URL + ApiConstants.UpdateUser, data, false, 'PUT')
      .then(response => {
        console.log(response);
        resolve(response);
      })
      .catch(error => {
        console.log(error);
        reject(error);
      });
  });
};

export const _addOrder = async data => {
  return new Promise((resolve, reject) => {
    fetchPost(BASE_URL + ApiConstants.AddOrder, data)
      .then(response => {
        console.log(response);
        resolve(response);
      })
      .catch(error => {
        console.log(error);
        reject(error);
      });
  });
};

export const _staticConfigData = async => {
  return new Promise((resolve, reject) => {
    fetchGet(BASE_URL + ApiConstants.ConfigDataStatic)
      .then(response => {
        console.log(response);
        resolve(response);
      })
      .catch(error => {
        console.log(error);
        reject(error);
      });
  });
};

export const _allUserOrder = async data => {
  return new Promise((resolve, reject) => {
    fetchPost(BASE_URL + ApiConstants.AllUserOrder, data)
      .then(response => {
        console.log(response);
        resolve(response);
      })
      .catch(error => {
        console.log(error);
        reject(error);
      });
  });
};

export const _searchProducts = async query => {
  return new Promise((resolve, reject) => {
    fetchGet(BASE_URL + ApiConstants.SearchItems + `?query=${query}`)
      .then(response => {
        // console.log(response);
        resolve(response);
      })
      .catch(error => {
        console.log(error);
        reject(error);
      });
  });
};
