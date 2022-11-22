import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../reduxtoolkit/hooks";
import { getOrders } from "../reduxtoolkit/slices/orderSlice";
import { OrderType } from "../types";
import { getAllOrders } from "../utilities/API";
import Order from "./Order";

const PendingOrder = () => {
  const dispatch = useDispatch();
  const pendingOrders = useAppSelector((state) => state.order);
  const getCurrentOrders = async () => {
    const orders = await getAllOrders();
    dispatch(getOrders(orders.data));
  };
  useEffect(() => {
    getCurrentOrders();
  }, []);

  return (
    <Container
      className="text-center"
      style={{ paddingTop: "80px", paddingBottom: "10px" }}
    >
      <h3>Pending Orders</h3>
      <Row mx={1} md={3}>
        {pendingOrders.map(
          (order: OrderType) =>
            !order.isCompleted && <Order key={order.id} order={order} />
        )}
      </Row>
    </Container>
  );
};

export default PendingOrder;
