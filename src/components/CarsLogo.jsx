import React, { useState,useEffect } from "react";
import axiosInstance from "../axiosConfig";

const CarsLogo = () => {
  // const [logo, setLogo] = useState([]);


  const logo = [
    {
      name: "Toyota",
      logo: "https://global.toyota/pages/global_toyota/mobility/toyota-brand/emblem_001.jpg",
    },
    {
      name: "Honda",
      logo: "https://w7.pngwing.com/pngs/305/848/png-transparent-honda-logo-honda-civic-type-r-car-honda-cr-v-honda-angle-rectangle-trademark.png",
    },
    {
      name: "Ford",
      logo: "https://m.media-amazon.com/images/I/51aB7yqrJsL.jpg",
    },
    {
      name: "Chevrolet",
      logo: "https://1000logos.net/wp-content/uploads/2019/12/Chevrolet-Logo-2010.png",
    },
    {
      name: "BMW",
      logo: "https://1000logos.net/wp-content/uploads/2018/02/BMW-Logo-1997.png",
    },
    {
      name: "Mercedes-Benz",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/2048px-Mercedes-Logo.svg.png",
    },
    {
      name: "Audi",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Audi_logo_detail.svg/1024px-Audi_logo_detail.svg.png",
    },
    {
      name: "Toyota",
      logo: "https://global.toyota/pages/global_toyota/mobility/toyota-brand/emblem_001.jpg",
    },
    {
      name: "Honda",
      logo: "https://w7.pngwing.com/pngs/305/848/png-transparent-honda-logo-honda-civic-type-r-car-honda-cr-v-honda-angle-rectangle-trademark.png",
    },
    {
      name: "Ford",
      logo: "https://m.media-amazon.com/images/I/51aB7yqrJsL.jpg",
    },
    {
      name: "Chevrolet",
      logo: "https://1000logos.net/wp-content/uploads/2019/12/Chevrolet-Logo-2010.png",
    },
    {
      name: "BMW",
      logo: "https://1000logos.net/wp-content/uploads/2018/02/BMW-Logo-1997.png",
    },
    {
      name: "Mercedes-Benz",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/2048px-Mercedes-Logo.svg.png",
    },
    {
      name: "Audi",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Audi_logo_detail.svg/1024px-Audi_logo_detail.svg.png",
    },
    {
      name: "Toyota",
      logo: "https://global.toyota/pages/global_toyota/mobility/toyota-brand/emblem_001.jpg",
    },
    {
      name: "Honda",
      logo: "https://w7.pngwing.com/pngs/305/848/png-transparent-honda-logo-honda-civic-type-r-car-honda-cr-v-honda-angle-rectangle-trademark.png",
    },
    {
      name: "Ford",
      logo: "https://m.media-amazon.com/images/I/51aB7yqrJsL.jpg",
    },
    {
      name: "Chevrolet",
      logo: "https://1000logos.net/wp-content/uploads/2019/12/Chevrolet-Logo-2010.png",
    },
    {
      name: "BMW",
      logo: "https://1000logos.net/wp-content/uploads/2018/02/BMW-Logo-1997.png",
    },
    {
      name: "Mercedes-Benz",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/2048px-Mercedes-Logo.svg.png",
    },
    {
      name: "Chevrolet",
      logo: "https://1000logos.net/wp-content/uploads/2019/12/Chevrolet-Logo-2010.png",
    },
    {
      name: "BMW",
      logo: "https://1000logos.net/wp-content/uploads/2018/02/BMW-Logo-1997.png",
    },
    {
      name: "Mercedes-Benz",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/2048px-Mercedes-Logo.svg.png",
    },
  ];




  // useEffect(() => {
  //   axiosInstance
  //     .get("/marks")
  //     .then((response) => {
  //       console.log(response.data);
  //       setLogo(response.data); 
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching the car logos:", error);
  //     });
  // }, []);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 p-4">
      {logo.map((item, index) => (
        <div
          key={index}
          className="flex justify-center items-center border border-gray-300 shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out"
        >
          <img
            src={item.logo}
            alt={item.name}
            className="w-24 h-32 object-contain"
          />
        </div>
      ))}
    </div>
  );
};

export default CarsLogo;
