import React from "react";
import { Button } from "react-bootstrap";
import { AppProps } from "../types";

const FilterButtons = ({ updateFilter }: AppProps) => {
  return (
    <div className="mt-4" id="menu">
      <Button onClick={ () => updateFilter && updateFilter("All")} variant="outline-primary">
        All Menu
      </Button>{" "}
      <Button onClick={() => updateFilter && updateFilter("POPULAR")} variant="outline-primary">
        POPULAR
      </Button>{" "}
      <Button onClick={() =>updateFilter && updateFilter("PIZZA")} variant="outline-secondary">
        PIZZA
      </Button>{" "}
      <Button onClick={() => updateFilter && updateFilter("BURGER")} variant="outline-success">
        BURGER
      </Button>{" "}
      <Button onClick={() =>updateFilter && updateFilter("CREPE")} variant="outline-warning">
        CREPE
      </Button>{" "}
      <Button onClick={() =>updateFilter && updateFilter("DRINKS")} variant="outline-danger">
        DRINKS
      </Button>{" "}
    </div>
  );
};

export default FilterButtons;
