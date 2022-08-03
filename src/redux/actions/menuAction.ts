export const getAllProducts = (lstProduct: any) => {
  return {
    type: "GET_ALL_PRODUCTS",
    payload: lstProduct,
  };
};
