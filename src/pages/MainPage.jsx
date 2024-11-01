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
      <div className="w-full max-w-[1440px] mx-auto flex-grow space-y-8">
        <div className="flex flex-col h-auto">
          <CaruselHeader />
        </div>
        <div className="flex flex-col h-auto">
          <Filters />
        </div>
        <div className="flex flex-col">
          <MainPageCarsCatalog />
        </div>
        <div className="flex flex-col h-auto">
          <WhyWe />
        </div>
        <div className="flex flex-col h-auto">
          <AboutUs />
        </div>
        <div className="flex flex-col h-auto">
          <CarsLogo />
        </div>
        <div className="flex flex-col h-auto">
          <StillSelecting />
        </div>
        <div className="flex flex-col h-auto">
          <News />
        </div>
        <div className="flex flex-col h-auto">
          <Comments />
        </div>
      </div>
    </>
  );
};

export default MainPage;
