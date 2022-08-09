import React, { useState } from "react";
import { Card, Col, Image, InputGroup, Row } from "react-bootstrap";
import logo from "../image/—Pngtree—seafood pizza with cheese_4942142.png";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { FaMinusCircle } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import { AppProp } from "../types";
import { useDispatch } from "react-redux";
import { addCartProduct } from "../redux/actions/cartActions";

const MenuItem = ({ item }: AppProp) => {
  const [qty, setQty] = useState(0);
  const dispatch = useDispatch();

  // const handelChange = (e: any) => {
  //   setQty(e.target.value);
  // };

  function handelPlus() {
    setQty(qty + 1);
  }

  const createCartObject = () => {
    if (qty !== 0) {
      dispatch(addCartProduct(item, qty));
      alert("add success");
    }
  };

  function handelMinus() {
    if (qty <= 0) {
      return setQty(0);
    } else {
      setQty(qty - 1);
    }
  }

  return (
    <Col mx={12} md={6}>
      <Card className="" border="light">
        <Row>
          <Col md="6" className="d-flex align-items-center">
            <Card.Img
              as="img"
              variant="top"
              src={item?.image}
              style={{ backgroundSize: "cover", overflowY: "hidden" }}
            />
          </Col>
          <Col md={6}>
            <Card.Body className="text-center">
              <Card.Title className="fs-3 fw-bold">{item?.name}</Card.Title>
              <Card.Text className="text-start">{item?.description}</Card.Text>
              <Card.Text className="fs-3 fw-bold" style={{ color: "red" }}>
                {item?.price} L.E
              </Card.Text>
            </Card.Body>
            <Row md={1} >
              <Col md={6}>
                <Card.Body className="d-flex justify-content-center gap-2">
                  <FaMinusCircle
                    className="fs-2 fw-bold"
                    style={{ cursor: "pointer" }}
                    onClick={handelMinus}
                  />
                  <InputGroup.Text style={{ height: "35px", width: "35px" }}>
                    {qty}
                  </InputGroup.Text>
                  <BsFillPlusCircleFill
                    className="fs-2 fw-bold "
                    style={{ cursor: "pointer" }}
                    onClick={handelPlus}
                  />
                </Card.Body>
              </Col>
              <Col md={6}>
                <Card.Body className="pe-3 d-flex justify-content-end ">
                  <BsCart4
                    className="fs-2 fw-bold"
                    style={{ cursor: "pointer" }}
                    onClick={createCartObject}
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
