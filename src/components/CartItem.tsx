import React, { useEffect } from "react";
import { Card, Col, Image, InputGroup, Row } from "react-bootstrap";
import { removeCartProduct } from "../redux/actions/cartActions";
import { useDispatch } from "react-redux";
import { MdDeleteForever } from "react-icons/md";
import { AppProp } from "../types";

const CartItem = ({ cartItem }: any) => {
  const dispatch = useDispatch();

  const deleteItemFromCart = () => {
    dispatch(removeCartProduct(cartItem.product));
    alert("item removed");
  };

  useEffect(() => {}, [cartItem]);
  return (
    <Col mx={12} md={12}>
      <Card className="" border="light">
        <Row>
          <Col md="6" className="d-flex align-items-center">
            <Card.Img
              as="img"
              variant="top"
              src={cartItem?.product.image}
              style={{ backgroundSize: "cover", overflowY: "hidden" }}
            />
          </Col>
          <Col md={6}>
            <Card.Body className="text-center">
              <Card.Title className="fs-3 fw-bold">
                {cartItem?.product.name}
              </Card.Title>
              <Card.Text className="text-start">
                {cartItem?.product.description}
              </Card.Text>
            </Card.Body>
            <Row>
              <Card.Body className="d-flex justify-content-center gap-2">
                <Col>
                  <Card.Text className="fs-6 fw-bold" style={{ color: "red" }}>
                    {cartItem?.product.price} L.E
                  </Card.Text>
                </Col>
                <Col>
                  <Card.Text className="fs-6 fw-bold" style={{ color: "red" }}>
                    Qty: {cartItem.quantity}
                  </Card.Text>
                </Col>
                <Col>
                  <Card.Text className="fs-6 fw-bold" style={{ color: "red" }}>
                    Total :{cartItem.quantity * cartItem.product.price}
                  </Card.Text>
                </Col>
              </Card.Body>
            </Row>
            <Card.Body className="pe-3 d-flex justify-content-end ">
              <Row>
                <Col>
                  <MdDeleteForever
                  className="fs-2"
                    onClick={deleteItemFromCart}
                    style={{ cursor: "pointer" }}
                  />
                </Col>
              </Row>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

export default CartItem;
