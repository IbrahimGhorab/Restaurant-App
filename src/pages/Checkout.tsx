import React from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
  InputGroup,
  Image,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../image/—Pngtree—seafood pizza with cheese_4942142.png";

const Checkout = () => {
  const orderDetails = useSelector((state: any) => state.cart);
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
              <Link to="/orderStatus">
                <Button variant="primary" type="submit">
                  Order Now
                </Button>
              </Link>
              <Button className="ms-3" variant="danger">
                Cancel
              </Button>
            </div>
          </Form>
        </Col>
        <Col md={5}>
          {orderDetails.map((item: any) => (
            <Col key={item?.id}>
              <Card className="" border="primary">
                <Row className="g-2">
                  <Col md={5}>
                    <Image src={logo} width="100%" />
                  </Col>
                  <Col md={7} className="text-start">
                    <Row className="">
                      <Col>
                        <Card.Title className="fw-bold">
                          {item?.product.name}
                        </Card.Title>
                        <Card.Text>{item?.product.description}</Card.Text>
                        <Card.Text>{item?.product.price} l.E</Card.Text>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <div className="d-flex justify-content-center gap-2">
                          <InputGroup.Text
                            style={{ height: "30px", width: "30px" }}
                          >
                            {item.quantity}
                          </InputGroup.Text>
                        </div>
                      </Col>
                      <Col>
                        <div className="pe-3 d-flex justify-content-end "></div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Checkout;
