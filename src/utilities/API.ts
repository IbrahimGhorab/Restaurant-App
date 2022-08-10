import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:4000" });

export const getProducts = () => API.get("/products");

export const postOrder = (data: any) => API.post("/orders", data);

export const getAllOrders = () => API.get("/orders");

export const updateOrder = (id: any) => API.patch(`/orders/${id}`);

// export const updateOrder = (id: any) => API.post(`/orders/${id}`);
