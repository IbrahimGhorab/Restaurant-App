import React from "react";
import { OrderLineType } from "../types";

const OrderLine = ({ orderLine }: { orderLine: OrderLineType }) => {
  // console.log(orderLine)
  return (
    <div className="d-flex justify-content-between">
      <p>{orderLine.product.name}</p>
      <p>Qty: {orderLine.quantity}</p>
    </div>
  );
};

export default OrderLine;
