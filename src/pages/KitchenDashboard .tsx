import React from "react";
import { Row, Col } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import KitchenSaidBar from "../components/KitchenSaidBar";


const KitchenDashboard = () => {
  return (
    <div className="vh-100">
      <Row md={2}>
        <Col md={3}>
          <KitchenSaidBar />
        </Col>
        <Col md={9}>
          <Outlet />
        </Col>
      </Row>
    </div>
  );
};

export default KitchenDashboard;
