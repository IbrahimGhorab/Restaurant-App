import React, { useState } from "react";
import { Card, Col, Image, Row, InputGroup } from "react-bootstrap";
import logo from "../image/—Pngtree—seafood pizza with cheese_4942142.png";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { FaMinusCircle } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import { AppProp } from "../types";

const MenuItem = ({ item }: AppProp) => {
  const [qty, setQty] = useState(0);

  function handelMinus() {
    if (qty <= 0) {
      return setQty(0);
    } else {
      return setQty(qty - 1);
    }
  }
  return (
    <Col key={item?.id}>
      <Card className="" border="primary">
        <Row className="g-2">
          <Col md={5}>
            <Image src={logo} width="100%" />
          </Col>
          <Col md={7} className="text-start">
            <Row className="">
              <Col>
                <Card.Title className="fw-bold">{item?.name}</Card.Title>
                <Card.Text>{item?.description}</Card.Text>
                <Card.Text>{item?.price} l.E</Card.Text>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="d-flex justify-content-center gap-2">
                  <FaMinusCircle
                    className="fs-4 fw-bold"
                    style={{ cursor: "pointer" }}
                    onClick={handelMinus}
                  />
                  <InputGroup.Text className="" style={{ height: "25px" }}>
                    {qty}
                  </InputGroup.Text>
                  <BsFillPlusCircleFill
                    className="fs-4 fw-bold "
                    style={{ cursor: "pointer" }}
                    onClick={() => setQty(qty + 1)}
                  />
                </div>
              </Col>
              <Col>
                <div className="pe-2 d-flex justify-content-end">
                  <BsCart4
                    className="fs-3 fw-bold "
                    style={{ cursor: "pointer" }}
                  />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

export default MenuItem;
