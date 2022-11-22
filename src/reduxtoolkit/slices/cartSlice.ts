import { Cart } from "./../../types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Cart[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increaseCartProduct: (state, action) => {
      const itemInCart: Cart | undefined = state.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        return state.map((item) => {
          if (item.id === action.payload.id) {
            // item.orderLines.map((order: any) => {
            //   return { ...order, quantity: item.orderLine.quantity + 1 };
            // });

            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      } else {
        return [...state, { ...action.payload, quantity: +1 }];
      }
    },

    decreaseCartProduct: (state, action) => {
      let cartItem: Cart | undefined = state.find(
        (item) => item.id === action.payload.id
      );
      if (cartItem!.quantity <= 1) {
        return state.filter((item) => item.id !== action.payload.id);
      } else {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
    },
    removeCartProduct: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
    resetCart: () => {
      return initialState;
    },
  },
});

export const {
  increaseCartProduct,
  decreaseCartProduct,
  removeCartProduct,
  resetCart,
} = cartSlice.actions;

export default cartSlice.reducer;
