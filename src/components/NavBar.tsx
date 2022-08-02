import React from "react";
import { useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { FaHome } from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import { BsCart4 } from "react-icons/bs";
import Cart from "./Cart";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        style={{ backgroundColor: "#303030" }}
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="#home" className="fs-2 fw-bold">
            OBSD <ImSpoonKnife style={{ color: "#FF9200" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link
                to="/"
                className="d-flex align-items-center text-decoration-none fw-bold"
                style={{ color: "white" }}
              >
                HOME
                <FaHome className="ms-1 fs-4" style={{ color: "#FF9200" }} />
              </Link>
            </Nav>
            <Nav className="d-flex">
              <Nav.Link href="#deets">Menu</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="">
                <BsCart4
                  className=" fs-4 fw-bold"
                  onClick={handleShow}
                  style={{ color: "white" }}
                />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Cart show={show} handleClose={handleClose} />
    </>
  );
};

export default NavBar;
