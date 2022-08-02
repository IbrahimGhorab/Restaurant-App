import React from "react";
import { useState } from "react";
import { Container, Row, Col, Stack } from "react-bootstrap";
import logo from "../image/—Pngtree—seafood pizza with cheese_4942142.png";
import MenuItem from "./MenuItem";

const Menu = () => {
  const [menu, setMenue] = useState([
    {
      img: `${logo}`,
      title: "item1",
      content: "some content",
      price: 123,
    },
    {
      img: `${logo}`,
      title: "item 2",
      content: "some content",
      price: 123,
    },
    {
      img: `${logo}`,
      title: "item 3",
      content: "some content",
      price: 123,
    },
    {
      img: `${logo}`,
      title: "item 4",
      content: "some content",
      price: 123,
    },
    {
      img: `${logo}`,
      title: "item 5",
      content: "some content",
      price: 123,
    },
    {
      img: `${logo}`,
      title: "item 5",
      content: "some content",
      price: 123,
    },
    {
      img: `${logo}`,
      title: "item 5",
      content: "some content",
      price: 123,
    },
    {
      img: `${logo}`,
      title: "item 5",
      content: "some content",
      price: 123,
    },
    {
      img: `${logo}`,
      title: "item 5",
      content: "some content",
      price: 123,
    },
    {
      img: `${logo}`,
      title: "item 5",
      content: "some content",
      price: 123,
    },
    {
      img: `${logo}`,
      title: "item 5",
      content: "some content",
      price: 123,
    },
    {
      img: `${logo}`,
      title: "item 5",
      content: "some content",
      price: 123,
    },
  ]);

  return (
    <Container className="my-4">
      <Row mx={1} md={3} className="g-3">
        {menu.map((item, idx) => (
          <MenuItem key={idx} item={item} />
        ))}
      </Row>
    </Container>
  );
};

export default Menu;
