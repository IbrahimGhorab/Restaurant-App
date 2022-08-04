import React from "react";
import { useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { FaHome } from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import {MdDeliveryDining} from "react-icons/md";
import Cart from "./Cart";
import { Link } from "react-router-dom";


const NavBar = () => {
  const [smShow, setSmShow] = useState(false);
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
              <Nav.Link href="#menu" style={{ scrollBehavior: "smooth" }}>
                Menu
              </Nav.Link>
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
              <Nav.Link href="" >
                <MdDeliveryDining
                  className=" fs-3 fw-bold"
                  onClick={() => setSmShow(true)}
                  style={{ color: "white" }}
                />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Cart smShow={smShow} onHide={()=>setSmShow(false)}/>
    </>
  );
};

export default NavBar;
