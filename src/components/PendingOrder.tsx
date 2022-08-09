import React, { useEffect } from "react";
import { Card, Col, Container, Form, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "../utilities/API";
import { getOrders } from "../redux/actions/orderAction";
import Order from "./Order";
// import moment from "moment";

const PendingOrder = () => {
  const orders = useSelector((state: any) => state.order);

  const dispatch = useDispatch();

  const getOrdersInfo = async () => {
    try {
      const orders = await getAllOrders();
      dispatch(getOrders(orders.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOrdersInfo();
  }, []);
  return (
    <Container>
      <Row mx={1} md={3}>
        {orders.map(
          (order: any) =>
            !order.isCompleted && <Order key={order.id} order={order} />
        )}
      </Row>
    </Container>
  );
};

export default PendingOrder;
