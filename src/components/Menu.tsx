import React from "react";
import { Container, Row } from "react-bootstrap";

import { AppProps, ProductType } from "../types";
import MenuItem from "./MenuItem";

const Menu = ({ displayMenu }: AppProps) => {
  

  return (
    <Container className="my-4">
      <Row mx={1} md={3} className="g-3">
        {displayMenu && displayMenu().map((item: ProductType) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </Row>
    </Container>
  );
};

export default Menu;
