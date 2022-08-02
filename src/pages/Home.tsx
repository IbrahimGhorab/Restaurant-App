import React from "react";
import FilterButtons from "../components/FilterButtons";
import LandingPage from "../components/LandingPage";
import Menu from "../components/Menu";

const Home = () => {
  return (
    <div>
      <LandingPage />
      <FilterButtons />
      <Menu />
    </div>
  );
};

export default Home;
