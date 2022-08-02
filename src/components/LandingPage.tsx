import React from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import logo from "../image/png_pizza_15176.png";

const LandingPage = () => {
  return (
    <div style={{ backgroundColor: "#303030" }}>
      <Container className="py-5 d-flex justify-content-center align-items-center text-start">
        <p className="fs-1 fw-bold " style={{ color: "white"}}>
          ENJOY OUR
          <br /> DELICIOUS <span style={{ color: "#FF9200" }}>FOOD</span>
        </p>
        <Image fluid src={logo} alt="pizza photo" style={{ width: "50%" }} />
      </Container>
    </div>
  );
};

export default LandingPage;
