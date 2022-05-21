import { operations } from "../../constants/operations";

export const updateCartItems = (payload, state) => {
  let prevCarts = state?.cartItems;
  const { operation, item, id } = payload;

  const isAlreadyAdded =
    prevCarts.filter((prod) => prod?._id === id).length > 0;
  const thatProd = prevCarts.filter((prod) => prod?._id === id)[0];
  const remainingProds = prevCarts.filter((prod) => prod?._id !== id);

  switch (operation) {
    case operations.PLUS:
      prevCarts = [
        ...remainingProds,
        {
          ...(isAlreadyAdded ? thatProd : item),
          cartCount: (isAlreadyAdded ? thatProd?.cartCount : 0) + 1,
        },
      ];
      break;
    case operations.MINUS:
      if (isAlreadyAdded && thatProd?.cartCount === 1) {
        prevCarts = [...remainingProds];
      } else if (!isAlreadyAdded) {
      } else {
        prevCarts = [
          ...remainingProds,
          {
            ...thatProd,
            cartCount: (isAlreadyAdded ? thatProd?.cartCount : 0) - 1,
          },
        ];
      }
      break;

    default:
      break;
  }

  return [...prevCarts];
};
