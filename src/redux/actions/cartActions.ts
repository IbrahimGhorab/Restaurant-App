export const addCartProduct = (product: any, quantity: any) => {
  return {
    type: "ADD_PRODUCT_CART",
    payload: {
      product,
      quantity,
    },
  };
};

export const removeCartProduct = (product: any) => {
  return {
    type: "REMOVE_PRODUCT_CART",
    payload: product,
  };
};

export const resetCart = () => {
  return {
    type: "RESET_CART",
    payload: [],
  };
};
