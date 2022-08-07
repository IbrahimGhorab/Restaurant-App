import React from 'react'
import logo from "../image/—Pngtree—seafood pizza with cheese_4942142.png";

import { Card, Col,Row,Image,InputGroup } from 'react-bootstrap'

const OrderItems = ({orderItem}:any) => {
  return (
    <Col>
              <Card className="" border="primary">
                <Row className="g-2">
                  <Col md={5}>
                    <Image src={logo} width="100%" />
                  </Col>
                  <Col md={7} className="text-start">
                    <Row className="">
                      <Col>
                        <Card.Title className="fw-bold">
                          {orderItem?.product.name}
                        </Card.Title>
                        <Card.Text>{orderItem?.product.description}</Card.Text>
                        <Card.Text>{orderItem?.product.price} l.E</Card.Text>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <div className="d-flex justify-content-center gap-2">
                          <InputGroup.Text
                            style={{ height: "30px", width: "30px" }}
                          >
                            {orderItem.quantity}
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
    
  )
}

export default OrderItems