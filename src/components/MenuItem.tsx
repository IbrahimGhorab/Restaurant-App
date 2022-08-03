import React from "react";
import { Card, Col, Image, Row } from "react-bootstrap";
import { AppProps } from "../types";

const MenuItem = ({ item }:AppProps) => {
  return (
    <Col key={item?.id}>
      <Card className="" border="primary">
        <Row className="g-0">
          <Col md={5}>
            <Image thumbnail src={item?.img} width="90%" />
          </Col>
          <Col md={7} className="text-start">
            <Card.Body>
              <Card.Title>{item?.name}</Card.Title>
              <Card.Text>{item?.description}</Card.Text>
              <Card.Text>{item?.price}</Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

export default MenuItem;
