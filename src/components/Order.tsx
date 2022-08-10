import React, { useEffect } from "react";
import { Button, Card, Col, Form, ListGroup } from "react-bootstrap";
import Clock from "react-live-clock";
import OrderLine from "./OrderLine";
import { updateOrder } from "../utilities/API";
import moment from "moment";

const Order = ({ order }: any) => {
  console.log(order);

  function orderTimer(order: any) {
    let now = new Date(Date.now()).getTime();
    let then = new Date(order.createdAt).getTime();
    let different = Math.round(now - then);
    return different;
  }
  const updateOrderStatus = async () => {
    await updateOrder(order.id);
  };

  useEffect(() => {}, [order]);

  return (
    <Col>
      <Card className="mt-3" style={{ width: "18rem" }}>
        <Card.Header className="d-flex justify-content-between">
          {order.isCompleted ? (
            ""
          ) : (
            <Button variant="primary" onClick={updateOrderStatus}>
              complete
            </Button>
          )}

          {order.isCompleted ? (
            moment(order.updatedAt).format("hh:mm")
          ) : (
            <Clock
              format={"HH:mm:ss"}
              ticking={true}
              timezone={"Etc/UTC"}
              date={orderTimer(order)}
            />
          )}
        </Card.Header>
        <ListGroup variant="flush">
          <Form.Group className="mb-3 px-3" controlId="formBasicCheckbox">
            {order.orderLines.map((productOrders: any) => (
              <OrderLine key={productOrders.id} productOrders={productOrders} />
            ))}
          </Form.Group>
        </ListGroup>
      </Card>
    </Col>
  );
};

export default Order;
