import React from "react";
import { Card, Form, ListGroup } from "react-bootstrap";
import KitchenSaidBar from "./KitchenSaidBar";

const CompletedOrder = () => {
  
  return (
    <Card className="mt-3" style={{ width: "18rem" }}>
      <Card.Header>Completed Orders</Card.Header>
      <ListGroup variant="flush">
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
      </ListGroup>
    </Card>
  );
};

export default CompletedOrder;
