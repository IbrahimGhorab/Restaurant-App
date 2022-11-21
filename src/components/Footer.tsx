import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { FaHome } from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import { BsCart4 } from "react-icons/bs";

const Footer = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      style={{ backgroundColor: "#303030" }}
      variant="dark"
    >
      <Container className="d-flex">
        <Navbar.Brand href="#home" className="fs-6">
          OBSD <ImSpoonKnife style={{ color: "#FF9200" }} />
        </Navbar.Brand>
        <div className="">
          <p className="flex-grow-1" style={{ color: "white" }}>            
            &copy; 2022 OBSD - ALL RIGHT RESERVED
          </p>
        </div>
      </Container>
    </Navbar>
  );
};

export default Footer;
