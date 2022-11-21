import React, { useState } from "react";
import { Card, Col, InputGroup, Row } from "react-bootstrap";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { FaMinusCircle } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import { AppProp } from "../types";
import { useDispatch } from "react-redux";
import {
  increaseCartProduct,
  decreaseCartProduct,
} from "../reduxtoolkit/slices/cartSlice";

const MenuItem = ({ item }: AppProp) => {
  const [qty, setQty] = useState(0);
  const dispatch = useDispatch();

  function handelPlus() {
    setQty(qty + 1);
    dispatch(increaseCartProduct(item));
  }

  function handelMinus() {
    if (qty <= 0) {
      return setQty(0);
    } else {
      setQty(qty - 1);
      dispatch(decreaseCartProduct(item));
    }
  }

  return (
    <Col mx={12} md={6}>
      <Card className="" border="light">
        <Row>
          <Col
            md="6"
            style={{
              backgroundImage: `url(${item?.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              overflowY: "hidden",
            }}
          ></Col>
          <Col md={6}>
            <Row>
              <Card.Body className="text-center">
                <Card.Title className="fs-3 fw-bold">{item?.name}</Card.Title>
                <Card.Text className="text-start">
                  {item?.description}
                </Card.Text>
              </Card.Body>
            </Row>
            <Row md={1}>
              <Col md={6}>
                <Card.Body className="d-flex justify-content-end ">
                  <Card.Text className="fs-4 fw-bold" style={{ color: "red" }}>
                    {item?.price} L.E
                  </Card.Text>
                </Card.Body>
              </Col>
              <Col md={6}>
                <Card.Body className="d-flex justify-content-center gap-2">
                  <FaMinusCircle
                    className="fs-1 fw-bold"
                    style={{ cursor: "pointer" }}
                    onClick={handelMinus}
                  />
                  <InputGroup.Text style={{ height: "35px", width: "35px" }}>
                    {qty}
                  </InputGroup.Text>
                  <BsFillPlusCircleFill
                    className="fs-1 fw-bold "
                    style={{ cursor: "pointer" }}
                    onClick={handelPlus}
                  />
                </Card.Body>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

export default MenuItem;
