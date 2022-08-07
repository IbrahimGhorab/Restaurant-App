// import { CartAction, Product } from "../../types";

export const cartReducer = (state = [], action: any) => {
  switch (action.type) {
    case "ADD_PRODUCT_CART":
      let itemInCart: any = state.find(
        (item: any) => item.product.id === action.payload.product.id
      );
      if (itemInCart) {
        if (itemInCart.quantity === action.payload.quantity) {
          return state;
        } else {
          return state.map((item: any) => {
            if (item.product.id === action.payload.product.id) {
              return { ...itemInCart, quantity: action.payload.quantity };
            } else {
              return item;
            }
          });
        }
      } else {
        return [...state, action.payload];
      }

    case "REMOVE_PRODUCT_CART":
      return state.filter((item:any)=>item.product.id !==action.payload.id)

    default:
      return state;
  }
};


