import React, { useState } from "react";
import { postOrder } from "../utilities/API";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import OrderItems from "../components/OrderItems";
import { resetCart } from "../redux/actions/cartActions";

const Checkout = () => {
  const orderDetails = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();
  const [client, setClient] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    mobile: "",
  });

  const onSubmitOrder = async (values: any) => {
    setClient({ ...values });
    try {
      const newOrder= await postOrder({ ...client, orderDetails });
      console.log(newOrder);
      dispatch(resetCart());
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container className="p-4 vh-100">
      <Row xs={1} md={2}>
        <Col md={7}>
          <Form>
            <div className="mb-3">
              <input
                className="mb-3"
                type="text"
                id="firstName"
                name="firstName"
                value={client.firstName}
                onChange={(e: any) =>
                  setClient({ ...client, firstName: e.target.value })
                }
                placeholder="First Name"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={client.lastName}
                onChange={(e: any) =>
                  setClient({ ...client, lastName: e.target.value })
                }
                placeholder="Last Name"
              />
            </div>

            <div className="mb-3">
              <input
                type="text"
                id="mobile"
                name="mobile"
                value={client.mobile}
                onChange={(e: any) =>
                  setClient({ ...client, mobile: e.target.value })
                }
                placeholder="Mobile"
              />
            </div>

            <div className="mb-3">
              <input
                type="text"
                id="address"
                name="address"
                value={client.address}
                onChange={(e: any) =>
                  setClient({ ...client, address: e.target.value })
                }
                placeholder="Address"
              />
            </div>

            <div className="mb-3">
              <input
                type="text"
                id="city"
                name="city"
                value={client.city}
                onChange={(e: any) =>
                  setClient({ ...client, city: e.target.value })
                }
                placeholder="City"
              />
            </div>

            <div className="d-flex">
              <Link to="/orderStatus">
                <Button
                  onClick={() =>
                    onSubmitOrder({
                      firstName: client.firstName,
                      lastName: client.lastName,
                      mobile: client.mobile,
                      address: client.address,
                      city: client.city,
                    })
                  }
                  variant="primary"
                  type="submit"
                >
                  Order Now
                </Button>
              </Link>
              <Button className="ms-3" variant="danger">
                Cancel
              </Button>
            </div>
          </Form>
        </Col>
        <Col md={5}>
          {orderDetails.map((orderItem: any) => (
            <OrderItems key={orderItem.product.id} orderItem={orderItem} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Checkout;
