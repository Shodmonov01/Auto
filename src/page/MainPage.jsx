import React from "react";
import CaruselHeader from "../components/Carusel/CaruselHeader";
import Filters from "../components/Filters";
import AutoCarsCatalog from "../components/AboutCarsCatalog";
import WhyWe from "../components//WhyWe";
import AboutUs from "../components/AboutUs";
import CarsLogo from "../components/CarsLogo";
import StillSelecting from "../components/StillSelecting";
import News from "../components/News";
import Comments from "../components/Comments";

const MainPage = () => {
  return (
    <>
      <div>
        <CaruselHeader />
        <Filters />
        <AutoCarsCatalog />
        <WhyWe />
        <AboutUs />
        <CarsLogo />
        <StillSelecting />
        <News />
        <Comments />
      </div>
    </>
  );
};

export default MainPage;
