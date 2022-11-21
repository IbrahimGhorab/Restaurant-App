import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Cart, OrderType, OrderLineType } from "../types";

const OrderItems = ({ orderItem }: {orderItem:Cart}) => {

  return (
    <Col mx={12} md={12} className="pt-5">
      <Card className="" border="light">
        <Row>
          <Col md="5" className="d-flex align-items-center">
            <Card.Img
              as="img"
              variant="top"
              src={orderItem?.image}
              style={{ backgroundSize: "cover", overflowY: "hidden" }}
            />
          </Col>
          <Col md={7}>
            <Card.Body className="text-center">
              <Card.Title className="fs-3 fw-bold">
                {orderItem?.name}
              </Card.Title>
              {/* <Card.Text className="text-start">
                {orderItem?.product.description}
              </Card.Text> */}
            </Card.Body>
            <Row>
              <Card.Body className="d-flex justify-content-center gap-2">
                <Col>
                  <Card.Text className="fs-6 fw-bold" style={{ color: "red" }}>
                    {orderItem?.price} L.E
                  </Card.Text>
                </Col>
                <Col>
                  <Card.Text className="fs-6 fw-bold" style={{ color: "red" }}>
                    Qty: {orderItem.quantity}
                  </Card.Text>
                </Col>
                <Col>
                  <Card.Text className="fs-6 fw-bold" style={{ color: "red" }}>
                    Total :{orderItem.quantity * orderItem.price}
                  </Card.Text>
                </Col>
              </Card.Body>
            </Row>
          </Col>
        </Row>
      </Card>
    </Col>

    // <Col>
    //           <Card className="" border="primary">
    //             <Row className="g-2">
    //               <Col md={5}>
    //                 <Image src={logo} width="100%" />
    //               </Col>
    //               <Col md={7} className="text-start">
    //                 <Row className="">
    //                   <Col>
    //                     <Card.Title className="fw-bold">
    //                       {orderItem?.product.name}
    //                     </Card.Title>
    //                     <Card.Text>{orderItem?.product.description}</Card.Text>
    //                     <Card.Text>{orderItem?.product.price} l.E</Card.Text>
    //                   </Col>
    //                 </Row>
    //                 <Row>
    //                   <Col>
    //                     <div className="d-flex justify-content-center gap-2">
    //                       <InputGroup.Text
    //                         style={{ height: "30px", width: "30px" }}
    //                       >
    //                         {orderItem.quantity}
    //                       </InputGroup.Text>
    //                     </div>
    //                   </Col>
    //                   <Col>
    //                     <div className="pe-3 d-flex justify-content-end "></div>
    //                   </Col>
    //                 </Row>
    //               </Col>
    //             </Row>
    //           </Card>
    //         </Col>
  );
};

export default OrderItems;
