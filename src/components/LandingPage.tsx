import React from "react";
import { Container } from "react-bootstrap";

const LandingPage = () => {
  return (
    <div
      className="hero d-flex justify-content-center align-items-center"
      style={{ backgroundColor: "#303030" }}
    >
      <Container className="">
        <p className="logo">Restaurant</p>
        <p className="fs-2 fw-bold " style={{ color: "white" }}>
          ENJOY OUR DELICIOUS <span style={{ color: "#FF9200" }}>FOOD</span>
        </p>
        <hr className="line" />
      </Container>
    </div>
  );
};

export default LandingPage;
