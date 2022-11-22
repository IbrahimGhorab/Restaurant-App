import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import KitchenSaidBar from "../components/KitchenSaidBar";
import { getOrders } from "../reduxtoolkit/slices/orderSlice";
import { getAllOrders } from "../utilities/API";

const KitchenDashboard = () => {
  const dispatch = useDispatch();

  const getOrdersInfo = async () => {
    try {
      const ordersData = await getAllOrders();      
      dispatch(getOrders(ordersData.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOrdersInfo();
  }, []);

  return (
    <div className="min-vh-100">
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
