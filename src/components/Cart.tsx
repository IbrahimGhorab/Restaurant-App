import React, { useEffect } from "react";
import { Button, Modal, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../image/—Pngtree—seafood pizza with cheese_4942142.png";
import { AppProp } from "../types";
import CartItem from "./CartItem";

const Cart = ({ smShow, onHide }: AppProp) => {
  let cartProduct = useSelector((state: any) => state.cart);

  useEffect(() => {}, [cartProduct]);

  const total = () => {
    if (cartProduct.length) {
      let amount = cartProduct?.map(
        (cartItem: any) => cartItem.quantity * cartItem.product.price
      );
      let totalAmount = amount.reduce((acc: any, cur: any) => acc + cur);
      return totalAmount;
    }
  };

  return (
    <Modal
      size="lg"
      show={smShow}
      onHide={() => onHide && onHide()}
      aria-labelledby="example-modal-sizes-title-lg"
      style={{ marginLeft: "20%", marginTop: "2.5%" }}
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          Check out page
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row md={1}>
            {cartProduct.map((cartItem: any) => (
              <CartItem key={cartItem.product.id} cartItem={cartItem} />
            ))}
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-between">
        <p>
          <span className="fs-5 fq-bold" style={{ color: "red" }}>
            Total order:{` ${typeof total() === "undefined" ? 0 : total()} L.E`}
          </span>
        </p>
        <Link to="/checkout">
          <Button>Check Out</Button>{" "}
        </Link>
      </Modal.Footer>
    </Modal>
  );
};

export default Cart;
