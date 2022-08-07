import React from "react";
import { Container, Row } from "react-bootstrap";

import { AppProp, Product } from "../types";
import MenuItem from "./MenuItem";

const Menu = ({ displayMenu }: AppProp) => {
  return (
    <Container className="my-4">
      <Row mx={1} md={3} className="g-3">
        {displayMenu &&
          displayMenu().map((item: Product) => (
            <MenuItem key={item.id} item={item} />
          ))}
      </Row>
    </Container>
  );
};

export default Menu;
