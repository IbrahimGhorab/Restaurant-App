import { combineReducers } from "redux";
import { menuReducer } from "./menuReducer";
import { cartReducer } from "./cartReducer";
import { orderReducer } from "./orderReducer";

const reducers = combineReducers({
  menu: menuReducer,
  cart: cartReducer,
  order: orderReducer,
});

export default reducers;
