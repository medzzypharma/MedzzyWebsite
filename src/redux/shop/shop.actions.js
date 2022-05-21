import shopActionTypes from './shop.types';

export const updateCartItems = payload => ({
  type: shopActionTypes.UPDATE_CART,
  payload,
});
export const emptyCartItems = () => ({
  type: shopActionTypes.EMPTY_CART,
});
