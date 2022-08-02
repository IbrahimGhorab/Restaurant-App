import React from "react";
import { Card, Col, Image, Row } from "react-bootstrap";

const MenuItem = ({ item }: any) => {
  return (
    <Col key={item.id}>
      <Card className="" border="primary">
        <Row>
          <Col>
            <Image thumbnail src={item.img} width="90%" />
          </Col>
          <Col>
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.content}</Card.Text>
              <Card.Text>{item.price}</Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

export default MenuItem;
