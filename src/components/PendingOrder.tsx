import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Order from "./Order";

const PendingOrder = () => {
  const pendingOrders = useSelector((state: any) => state.order);

  console.log(pendingOrders);

  return (
    <Container>
      <Row mx={1} md={3}>
        {pendingOrders.map(
          (order: any) =>
            !order.isCompleted && <Order key={order.id} order={order} />
        )}
      </Row>
    </Container>
  );
};

export default PendingOrder;
