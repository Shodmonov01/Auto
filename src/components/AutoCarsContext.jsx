import React, { createContext, useContext, useState } from "react";

const AutoCarsContext = createContext();

export const AutoCarsProvider = ({ children }) => {
 const initialCars = [
   {
     id: 1,
     name: "Mercedes S-Class",
     year: 2020,
     image:
       "https://www.slashgear.com/img/gallery/12-most-expensive-mercedes-of-all-time/l-intro-1701212622.jpg",
     price: 45000,
     mileage: 5000,
     createdIn: "Germany",
     fuelConsumption: "5.6 L/100 km",
     engineType: "Hybrid",
     likes: 0,
     description: "A luxurious hybrid vehicle with state-of-the-art features.",
   },
   {
     id: 2,
     name: "Mercedes E-Class",
     year: 2019,
     image:
       "https://www.slashgear.com/img/gallery/10-most-luxurious-mercedes-benz-cars-ever-made-ranked/l-intro-1686086979.jpg",
     price: 40000,
     mileage: 8000,
     createdIn: "Germany",
     fuelConsumption: "6.8 L/100 km",
     engineType: "Fuel",
     likes: 0,
     description: "A fuel-powered car with excellent performance and comfort.",
   },
   {
     id: 3,
     name: "Mercedes AMG GT",
     year: 2021,
     image:
       "https://img.indianautosblog.com/2014/08/Rendering-Mercedes-AMG-GT.jpg",
     price: 60000,
     mileage: 2000,
     createdIn: "Germany",
     fuelConsumption: "8.3 L/100 km",
     engineType: "Hybrid",
     likes: 0,
     description: "An affordable hybrid car with a sleek design.",
   },
   {
     id: 4,
     name: "Mercedes GLE",
     year: 2018,
     image:
       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUtdQGTnISBBzFxTL3_hIKovaA8WWbgVNs8Q&s",
     price: 38000,
     mileage: 12000,
     createdIn: "Germany",
     fuelConsumption: "7.5 L/100 km",
     engineType: "Fuel",
     likes: 0,
     description: "A stylish fuel car with a high-end finish.",
   },
   {
     id: 6,
     name: "Mercedes GLS",
     year: 2021,
     image:
       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkR3g7jwMjHtAGPiQMWCRPZ_b1DbqrEBRRYw&s",
     price: 75000,
     mileage: 3000,
     createdIn: "Germany",
     fuelConsumption: "10.2 L/100 km",
     engineType: "Fuel",
     likes: 0,
     description: "A premium fuel car with advanced technology and features.",
   },
   {
     id: 5,
     name: "Mercedes C-Class",
     year: 2022,
     image:
       "https://i.pinimg.com/originals/b9/05/3a/b9053a37387e8a6ec8da0bff568d9b3b.jpg",
     price: 50000,
     mileage: 4000,
     createdIn: "Germany",
     fuelConsumption: "5.3 L/100 km",
     engineType: "Hybrid",
     likes: 0,
     description:
       "A hybrid car that combines performance with fuel efficiency.",
   },
   {
     id: 1,
     name: "Mercedes S-Class",
     year: 2020,
     image:
       "https://www.slashgear.com/img/gallery/12-most-expensive-mercedes-of-all-time/l-intro-1701212622.jpg",
     price: 45000,
     mileage: 5000,
     createdIn: "Germany",
     fuelConsumption: "5.6 L/100 km",
     engineType: "Hybrid",
     likes: 0,
     description: "A luxurious hybrid vehicle with state-of-the-art features.",
   },
   {
     id: 2,
     name: "Mercedes E-Class",
     year: 2019,
     image:
       "https://www.slashgear.com/img/gallery/10-most-luxurious-mercedes-benz-cars-ever-made-ranked/l-intro-1686086979.jpg",
     price: 40000,
     mileage: 8000,
     createdIn: "Germany",
     fuelConsumption: "6.8 L/100 km",
     engineType: "Fuel",
     likes: 0,
     description: "A fuel-powered car with excellent performance and comfort.",
   },
   {
     id: 3,
     name: "Mercedes AMG GT",
     year: 2021,
     image:
       "https://img.indianautosblog.com/2014/08/Rendering-Mercedes-AMG-GT.jpg",
     price: 60000,
     mileage: 2000,
     createdIn: "Germany",
     fuelConsumption: "8.3 L/100 km",
     engineType: "Hybrid",
     likes: 0,
     description: "An affordable hybrid car with a sleek design.",
   },
   {
     id: 4,
     name: "Mercedes GLE",
     year: 2018,
     image:
       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUtdQGTnISBBzFxTL3_hIKovaA8WWbgVNs8Q&s",
     price: 38000,
     mileage: 12000,
     createdIn: "Germany",
     fuelConsumption: "7.5 L/100 km",
     engineType: "Fuel",
     likes: 0,
     description: "A stylish fuel car with a high-end finish.",
   },
   {
     id: 5,
     name: "Mercedes C-Class",
     year: 2022,
     image:
       "https://i.pinimg.com/originals/b9/05/3a/b9053a37387e8a6ec8da0bff568d9b3b.jpg",
     price: 50000,
     mileage: 4000,
     createdIn: "Germany",
     fuelConsumption: "5.3 L/100 km",
     engineType: "Hybrid",
     likes: 0,
     description:
       "A hybrid car that combines performance with fuel efficiency.",
   },
   {
     id: 6,
     name: "Mercedes GLS",
     year: 2021,
     image:
       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkR3g7jwMjHtAGPiQMWCRPZ_b1DbqrEBRRYw&s",
     price: 75000,
     mileage: 3000,
     createdIn: "Germany",
     fuelConsumption: "10.2 L/100 km",
     engineType: "Fuel",
     likes: 0,
     description: "A premium fuel car with advanced technology and features.",
   },
 ];

  const [cars, setCars] = useState(initialCars);

  return (
    <AutoCarsContext.Provider value={{ cars, setCars }}>
      {children}
    </AutoCarsContext.Provider>
  );
};

export const useAutoCars = () => useContext(AutoCarsContext);