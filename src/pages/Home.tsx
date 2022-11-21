import React, { useState, useEffect } from "react";
import FilterButtons from "../components/FilterButtons";
import LandingPage from "../components/LandingPage";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../reduxtoolkit/slices/menuSlice";
import { getProducts } from "../utilities/API";

import Menu from "../components/Menu";
import { useAppSelector } from "../reduxtoolkit/hooks";

const Home = () => {
  const menu = useAppSelector((state) => state.menu);
  const dispatch = useDispatch();

  const getAllData = async () => {
    const products = await getProducts();
    dispatch(getAllProducts(products.data));
  };

  useEffect(() => {
    getAllData();
  }, []);

  const [filter, setFilter] = useState("All");

  function updateFilter(input: string) {
    setFilter(input);
  }

  function displayMenu() {
    switch (filter) {
      case "POPULAR":
        return menu.filter((item) => item.isPopular);
      case "PIZZA":
        return menu.filter((item) => item.category === "PIZZA");
      case "BURGER":
        return menu.filter((item) => item.category === "BURGER");
      case "CREPE":
        return menu.filter((item) => item.category === "CREPE");
      case "DRINKS":
        return menu.filter((item) => item.category === "DRINKS");
      case "All":
      default:
        return menu;
    }
  }

  return (
    <div>
      <LandingPage />
      <FilterButtons updateFilter={updateFilter} />
      <Menu displayMenu={displayMenu} />
    </div>
  );
};

export default Home;
