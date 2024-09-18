import React from "react";
import Filters from "../components/Filters";
import AboutCarsCatalog from "../components/AboutCarsCatalog";
import StillSelecting from "../components/StillSelecting";

const AboutCarsPage = () => {
  return (
    <div>
      <Filters />
      <AboutCarsCatalog />
      <StillSelecting />
    </div>
  );
};

export default AboutCarsPage;
