import shopActionTypes from './shop.types';
import {updateCartItems} from './shop.utils';

const initialCounter = {
  products: [],
  cartItems: [],
};

export default function shopReducer(state = initialCounter, action) {
  switch (action.type) {
    case shopActionTypes.UPDATE_CART:
      return {
        ...state,
        cartItems: updateCartItems(action.payload, state),
      };
    case shopActionTypes.EMPTY_CART:
      return {
        ...state,
        cartItems: [],
      };

    default:
      return {
        ...state,
      };
  }
}
