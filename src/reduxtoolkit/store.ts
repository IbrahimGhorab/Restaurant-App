import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../reduxtoolkit/slices/menuSlice";
import cartReducer from "../reduxtoolkit/slices/cartSlice";
import orderReducer from "../reduxtoolkit/slices/orderSlice";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    cart: cartReducer,
    order: orderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
