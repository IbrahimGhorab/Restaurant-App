import React from "react";
import { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { FaHome } from "react-icons/fa";

import { ImSpoonKnife } from "react-icons/im";
import { BsCart4 } from "react-icons/bs";
import Cart from "./Cart";
import { Link } from "react-router-dom";
import { useAppSelector } from "../reduxtoolkit/hooks";

const NavBar = () => {
  const [smShow, setSmShow] = useState<boolean>(false);
  const cartList = useAppSelector((state) => state.cart);
  let cartLingth = cartList.length;
  return (
    <>
      <Navbar
        collapseOnSelect
        fixed="top"
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
              <Nav.Link
                as={Link}
                to="/kitchendashboard"
                className="d-flex align-items-center text-decoration-none fw-bold"
                style={{ color: "white" }}
              >
                Kitchen Dashboard
              </Nav.Link>

              <Nav.Link href="" className="position-relative">
                <BsCart4
                  className=" fs-3 fw-bold"
                  onClick={() => setSmShow(true)}
                  style={{ color: "white" }}
                />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  +{cartLingth}
                  <span className="visually-hidden">unread messages</span>
                </span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Cart smShow={smShow} onHide={() => setSmShow(false)} />
    </>
  );
};

export default NavBar;
