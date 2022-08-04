import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

import { AppProp } from "../types";

const Cart = ({ smShow, onHide }: AppProp) => {
  const [cartItemt, setCaertItems] = useState([]);
  return (
    <Modal
      size="sm"
      show={smShow}
      onHide={() => {
        onHide && onHide();
      }}
      aria-labelledby="example-modal-sizes-title-sm"
      style={{ marginLeft: "37%", marginTop: "3%" }}
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-sm">
          Check out page
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>...</Modal.Body>
      <Modal.Footer>
        <Link to="/checkout">
          <Button>Check Out</Button>{" "}
        </Link>
      </Modal.Footer>
    </Modal>
  );
};

export default Cart;
