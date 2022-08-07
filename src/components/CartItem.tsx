import React, { useEffect } from "react";
import { Button, Card, Col, Image, Row } from "react-bootstrap";
import { removeCartProduct } from "../redux/actions/cartActions";
import { useDispatch } from "react-redux";
import { AppProp } from "../types";

const CartItem = ({ cartItem }: any) => {
  const dispatch = useDispatch();   

  const deleteItemFromCart = () => {
    dispatch(removeCartProduct(cartItem.product));
    alert("item removed");
  };

  useEffect(() => {}, [cartItem]);
  return (
    <Col>
      <Card>
        <Row className="g-3">
          <Col>
            <Image
              width="50%"
              // style={{ width: "130px", height: "150px" }}
              src="https://media-cdn.tripadvisor.com/media/photo-s/14/3e/82/1c/picture-says-it-all.jpg"
            ></Image>
          </Col>
          <Col>
            <p>{cartItem.product.name}</p>
            <p>Qty: {cartItem.quantity}</p>
            <p>Price: {cartItem.product.price}</p>
            <p>Total: {cartItem.quantity * cartItem.product.price}</p>
          </Col>
        </Row>
        <Row>
          <Button onClick={deleteItemFromCart}>Remove Item</Button>
        </Row>
      </Card>
    </Col>
  );
};

export default CartItem;
