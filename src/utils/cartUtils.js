export const calcCartAmount = (cartItems, service = 0) => {
  const bestPrice =
    cartItems?.reduce(
      (n, {best_price, cartCount}) =>
        parseFloat(best_price?.split('₹')[1].trim()) * cartCount + n,
      0,
    ) + service;

  return bestPrice.toFixed(2);
};
