import React from "react";
import Order from "./Order";
import { Container, Row } from "react-bootstrap";
import { useAppSelector } from "../reduxtoolkit/hooks";

const CompletedOrder = () => {
  const CompletedOrders = useAppSelector((state) => state.order);

  return (
    <Container className="" style={{ paddingTop: "80px" }}>
      <h3>Completed Orders</h3>
      <Row mx={1} md={3}>
        {CompletedOrders.map(
          (order) =>
            order.isCompleted && <Order key={order.id} order={order} />
        )}
      </Row>
    </Container>
  );
};

export default CompletedOrder;
