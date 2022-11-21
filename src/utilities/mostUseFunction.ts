import { getOrders } from "../reduxtoolkit/slices/orderSlice";
import { getAllOrders } from "./API";
import { useDispatch } from "react-redux";

export const getOrdersInfo = async () => {
  try {
    const ordersData = await getAllOrders();
  } catch (error) {
    console.log(error);
  }
};
