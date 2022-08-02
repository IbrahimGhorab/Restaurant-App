import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Cart from "../components/Cart";

const Checkout = () => {
  
  return (
    <Container className="p-4 vh-100">
      <Row xs={1} md={2}>
        <Col md={7}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Control type="text" placeholder="Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicMobile">
              <Form.Control type="text" placeholder="Mobile" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicAddress">
              <Form.Control type="text" placeholder="Address" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicAddress">
              <Form.Control type="text" placeholder="City" />
            </Form.Group>

            <div className="d-flex">
              <Button variant="primary" type="submit">
                Order Now
              </Button>
              <Button className="ms-3" variant="danger">
                Cancel
              </Button>
            </div>
          </Form>
        </Col>
        <Col md={5}>
          <Cart/>
        </Col>
      </Row>
    </Container>
  );
};

export default Checkout;
