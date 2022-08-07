import { combineReducers } from "redux";
import { menuReducer } from "./menuReducer";
import { cartReducer } from "./cartReducer";

const reducers = combineReducers({ menu: menuReducer, cart: cartReducer });

export default reducers;
