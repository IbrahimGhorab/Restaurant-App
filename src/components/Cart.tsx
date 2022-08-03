import React from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AppProps } from "../types";

const Cart = ({ show, handleClose }: AppProps) => {
    
  return (
    <Modal show={show} onHide={()=>handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        I will not close if you click outside me. Don't even try to press escape
        key.
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={()=>handleClose}>
          Close
        </Button>
        <Link to="/checkout">
        <Button variant="primary">Understood</Button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
};

export default Cart;
