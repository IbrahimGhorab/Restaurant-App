import React from "react";
import { Link } from "react-router-dom";

const KitchenSaidBar = () => {
  return (
    <div
      className="text-center"
      style={{
        backgroundColor: "#303030",
        color: "white",
        paddingTop: "80px",
        minHeight: "100%",
      }}
    >
      <h3>Dash Board</h3>
      <Link
        className="text-decoration-none py-3"
        style={{ color: "white" }}
        to="pendingorder"
      >
        <p>Pending Orders</p>
      </Link>
      <Link
        className="text-decoration-none py-3"
        style={{ color: "white" }}
        to="completedorder"
      >
        <p>Completed Orders</p>
      </Link>
    </div>
  );
};

export default KitchenSaidBar;
