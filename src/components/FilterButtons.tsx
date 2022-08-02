import React from "react";
import { Button } from "react-bootstrap";

const FilterButtons = () => {
  return (
    <div className="mt-4">
      <Button variant="outline-primary">POPULAR</Button>{" "}
      <Button variant="outline-secondary">PIZZA</Button>{" "}
      <Button variant="outline-success">BURGER</Button>{" "}
      <Button variant="outline-warning">CREPE</Button>{" "}
      <Button variant="outline-danger">DRINKS</Button>{" "}
    </div>
  );
};

export default FilterButtons;
