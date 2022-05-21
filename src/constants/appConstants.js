export const appConstants = {
  USER_LOCAL_KEY: 'MEDZZY_USER',
  GOOGLE_API_KEY: 'AIzaSyDBS0wijoDloofa0WGLvSpZv9ewhMm63T8',
};

export const orderStatus = {
  ORDER_RECEIVED: 'Order Received',
  VERIFICATION_PENDING: 'Verification Pending',
};

export const ORDER_IN_MINS = 15;
export const ORDER_IN_SECS = 900;

export const RESEND_TIMER = 59;

export const ApiConstants = {
  Login: '/login',
  Logout: '/logout',

  AddStore: '/addStore',
  UpdateStore: '/updateStore',
  DeleteStore: '/deleteStore',
  AllStores: '/allStores',

  UploadInventory: '/uploadInventory',
  UpdateInventory: '/updateInventory',
  DeleteInventory: '/deleteInventory',
  AllInventories: '/allInventories',

  AddItem: '/addItem',
  UpdateItem: '/updateItem',
  DeleteItem: '/deleteItem',
  AllItems: '/allItems',
  SearchItems: '/searchItems',

  AllOrders: '/allOrders',
  AddOrder: '/addOrder',
  AllUserOrder: '/allUserOrder',

  GetUser: '/getUser',
  UpdateUser: '/updateUser',

  UserExists: '/userExists',
  UploadCategories: '/UploadCategories',

  ConfigData: '/configData',
  ConfigDataStatic: '/configDataStatic',
  AddPrescription: '/addPrescription',
};

// export const BASE_URL = 'http://34.122.142.123';
// export const BASE_URL = 'http://127.0.0.1:5000';
// export const BASE_URL = 'http://192.168.2.5';
export const BASE_URL = 'https://medzzy-bc67a.uc.r.appspot.com';
export const AS_LOCATION_ACCESS_KEY = 'AS_LOCATION_ACCESS_KEY';

export const ORDER_STATUS = {
  PACKING: 'PACKING',
  TRANSIT: 'TRANSIT',
  DELIVERED: 'DELIVERED',
};
