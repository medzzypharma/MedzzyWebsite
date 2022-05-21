import {combineReducers} from 'redux';
import loaderReducer from './reducers/loader-reducer';
import userReducer from './reducers/user-reducer';
import shopReducer from './shop/shop.reducer';

const rootReducer = combineReducers({
  shop: shopReducer,
  loader: loaderReducer,
  user: userReducer,
});

export default rootReducer;
