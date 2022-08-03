import React, { useState, useEffect } from "react";
import FilterButtons from "../components/FilterButtons";
import LandingPage from "../components/LandingPage";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../redux/actions/menuAction";
import { getProducts } from "../utilities/API";
import logo from "../image/—Pngtree—seafood pizza with cheese_4942142.png";
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

  // const [menu, setMenu] = useState([
  //   {
  //     img: `${logo}`,
  //     title: "item1",
  //     content: "some content",
  //     isPopular: true,
  //     category: "pizza",
  //     price: 123,
  //   },
  //   {
  //     img: `${logo}`,
  //     title: "item 2",
  //     content: "some content",
  //     isPopular: true,
  //     category: "pizza",
  //     price: 123,
  //   },
  //   {
  //     img: `${logo}`,
  //     title: "item 3",
  //     content: "some content",
  //     isPopular: true,
  //     category: "pizza",
  //     price: 123,
  //   },
  //   {
  //     img: `${logo}`,
  //     title: "item 4",
  //     content: "some content",
  //     isPopular: true,
  //     category: "crepe",
  //     price: 123,
  //   },
  //   {
  //     img: `${logo}`,
  //     title: "item 5",
  //     content: "some content",
  //     isPopular: true,
  //     category: "Drinks",
  //     price: 123,
  //   },
  //   {
  //     img: `${logo}`,
  //     title: "item 6",
  //     content: "some content",
  //     isPopular: true,
  //     category: "pizza",
  //     price: 123,
  //   },
  //   {
  //     img: `${logo}`,
  //     title: "item 7",
  //     content: "some content",
  //     isPopular: false,
  //     category: "pizza",
  //     price: 123,
  //   },
  //   {
  //     img: `${logo}`,
  //     title: "item 8",
  //     content: "some content",
  //     isPopular: true,
  //     category: "Drinks",
  //     price: 123,
  //   },
  //   {
  //     img: `${logo}`,
  //     title: "item 9",
  //     content: "some content",
  //     isPopular: true,
  //     category: "pizza",
  //     price: 123,
  //   },
  //   {
  //     img: `${logo}`,
  //     title: "item 10",
  //     content: "some content",
  //     isPopular: false,
  //     category: "Drinks",
  //     price: 123,
  //   },
  //   {
  //     img: `${logo}`,
  //     title: "item 11",
  //     content: "some content",
  //     isPopular: true,
  //     category: "pizza",
  //     price: 123,
  //   },
  //   {
  //     img: `${logo}`,
  //     title: "item 12",
  //     content: "some content",
  //     isPopular: false,
  //     category: "Drinks",
  //     price: 123,
  //   },
  // ]);

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

  // function displayMenu() {
  //   switch (filter) {
  //     case "POPULAR":
  //       let popItems = menu.filter((item) => item.isPopular);
  //       return setMenu(popItems);
  //     case "PIZZA":
  //       let pizzaItems = menu.filter((item) => item.category === "pizza");
  //       return setMenu(pizzaItems);
  //     case "BURGER":
  //       let burgerItems = menu.filter((item) => item.category === "BURGER");
  //       return setMenu(burgerItems);
  //     case "CREPE":
  //       let crepItems = menu.filter((item) => item.category === "crepe");
  //       return setMenu(crepItems);
  //     case "DRINKS":
  //       let drinkItems = menu.filter((item) => item.category === "Drinks");
  //       return setMenu(drinkItems);
  //   }
  // }

  return (
    <div>
      <LandingPage />
      <FilterButtons updateFilter={updateFilter} />
      <Menu displayMenu={displayMenu} />
    </div>
  );
};

export default Home;
