import React, { useEffect } from "react";
import { Button, Modal, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../image/—Pngtree—seafood pizza with cheese_4942142.png";
import { useAppSelector } from "../reduxtoolkit/hooks";
import { AppProp } from "../types";
import CartItem from "./CartItem";

const Cart = ({ smShow, onHide }: AppProp) => {
  let cartProduct = useAppSelector((state) => state.cart);

  console.log(cartProduct);

  useEffect(() => {}, [cartProduct]);

  const total = () => {
    if (cartProduct.length) {
      let amount = cartProduct?.map(
        (cartItem) => cartItem.quantity * cartItem.price
      );
      let totalAmount = amount.reduce((acc: number, cur: number) => acc + cur);
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
            {cartProduct.map((cartItem) => (
              <CartItem key={cartItem.id} cartItem={cartItem} />
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
