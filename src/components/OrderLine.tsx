import React from "react";

const OrderLine = ({ productOrders }: any) => {
//   console.log(productOrders);
//   const sumQuantity = (productOrders)=>{
//       let sumQty
//   }
  return (
    <div className="d-flex justify-content-between">
      <p>{productOrders.product?.name}</p>
      <p>Qty: {productOrders.quantity}</p>
    </div>
  );
};

export default OrderLine;
