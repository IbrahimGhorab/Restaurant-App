import React from "react";
import { Container, Image } from "react-bootstrap";
import success from "../image/Check1.png";

const OrderStatus = () => {
  return (
    <Container className="vh-100 d-flex flex-column justify-content-center align-items-center">
      <Image src={success} width="25%" />
      <p className="fs-3 fw-bold" style={{color:"blue"}}>ORDER PLACED</p>
    </Container>
  );
};

export default OrderStatus;
