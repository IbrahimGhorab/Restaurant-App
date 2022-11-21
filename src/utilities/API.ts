import { Cart } from "./../types";
import axios from "axios";
import { OrderLineType, OrderType } from "../types";

const API = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });

export const getProducts = () => API.get("/products");

export const postOrder = (data: { orderDetails: Cart[] }) =>
  API.post("/orders", data);

export const getAllOrders = () => API.get("/orders");

export const updateOrder = (id: string) => API.patch(`/orders/${id}`);

// export const updateOrder = (id: any) => API.post(`/orders/${id}`);
