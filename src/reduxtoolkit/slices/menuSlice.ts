import { Product } from "./../../types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: Product[] = [];

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    getAllProducts: (state, action: PayloadAction<Product[]>) => {
      return action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getAllProducts } = menuSlice.actions;

export default menuSlice.reducer;
