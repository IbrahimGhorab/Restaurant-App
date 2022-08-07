import React, { useState, useEffect } from "react";
import FilterButtons from "../components/FilterButtons";
import LandingPage from "../components/LandingPage";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../redux/actions/menuAction";
import { getProducts } from "../utilities/API";

import Menu from "../components/Menu";

const Home = () => {
  const menu = useSelector((state: any) => state.menu);
  const dispatch = useDispatch();

  const getAllData = async () => {
    const products = await getProducts();
    dispatch(getAllProducts(products.data));
    console.log(products.data);
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
        return menu.filter((item: any) => item.isPopular);
      case "PIZZA":
        return menu.filter((item: any) => item.category === "PIZZA");
      case "BURGER":
        return menu.filter((item: any) => item.category === "BURGER");
      case "CREPE":
        return menu.filter((item: any) => item.category === "CREPE");
      case "DRINKS":
        return menu.filter((item: any) => item.category === "DRINKS");
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
