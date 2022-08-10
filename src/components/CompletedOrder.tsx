import React from "react";
import Order from "./Order"
import {  Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";


const CompletedOrder = () => {
  const CompletedOrders = useSelector((state: any) => state.order);

  return (
    <Container>
      <Row mx={1} md={3}>
        {CompletedOrders.map(
          (order: any) =>
            order.isCompleted && <Order key={order.id} order={order} />
        )}
      </Row>
    </Container>
  );
};

export default CompletedOrder;
