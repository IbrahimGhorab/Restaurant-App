import { Product } from "../../types";

export const getAllProducts = (lstProduct: Product[]) => {
  return {
    type: "GET_ALL_PRODUCTS",
    payload: lstProduct,
  };
};
