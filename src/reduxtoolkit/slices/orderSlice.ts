import { OrderType } from "./../../types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: OrderType[] = [];

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    getOrders: (state, action: PayloadAction<OrderType[]>) => {
      return action.payload;
    },
    updateOrderStatus: (state, action: PayloadAction<OrderType>) => {
      return state;
    },
  },
});

export const { getOrders, updateOrderStatus } = orderSlice.actions;

export default orderSlice.reducer;
