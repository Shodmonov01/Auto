import React from "react";
import CaruselHeader from "../components/Carusel/CaruselHeader";
import Filters from "../components/Filters";
import WhyWe from "../components/WhyWe";
import AboutUs from "../components/AboutUs";
import CarsLogo from "../components/CarsLogo";
import StillSelecting from "../components/StillSelecting";
import News from "../components/News";
import Comments from "../components/Comments";
import MainPageCarsCatalog from "../components/MainPageCarsCatalog";

const MainPage = () => {
  return (
    <>
      <div className="w-full max-w-[1440px] mx-auto flex-grow">
        <CaruselHeader />
        <Filters />
        <MainPageCarsCatalog />
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
