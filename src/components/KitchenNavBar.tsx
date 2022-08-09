import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { ImSpoonKnife } from "react-icons/im";

const KitchenNavBar = () => {
  return (
    <Navbar
      collapseOnSelect
      // fixed="top"
      expand="lg"
      style={{ backgroundColor: "#303030" }}
      variant="dark"
    >
      <Container>
        <Navbar.Brand href="#home" className="fs-2 fw-bold">
          OBSD <ImSpoonKnife style={{ color: "#FF9200" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav"></Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default KitchenNavBar;
