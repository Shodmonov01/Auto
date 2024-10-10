import React, { useState, useEffect } from "react";
import { FcLike } from "react-icons/fc";
import { IoHeartDislikeOutline } from "react-icons/io5";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../axiosConfig";
import { useLanguage } from "../Context/LanguageContext";
import MotorcyclesFilters from "./MotorcyclesFilters";

const Motorcycles = () => {
  const carsPerPage = 6;
  const [cars, setCars] = useState([]);
  const [likedCars, setLikedCars] = useState(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const { language } = useLanguage();
  const translations = {
    ru: {
      catalog: "Мотоциклы",
      watchCatalog: "Перейти в каталог",
    },
    uzb: {
      catalog: "Mototsikllar",
      watchCatalog: "Katalogga o'ting",
    },
    en: {
      catalog: "Motorcycles",
      watchCatalog: "Go to the catalog",
    },
  };

  const totalPages = Math.ceil(cars.length / carsPerPage);

  useEffect(() => {
    axiosInstance
      .get("/motorcycles")
      .then((response) => {
        console.log("API Response:", response.data);

        if (Array.isArray(response.data)) {
          const apiCars = response.data.map((car) => ({
            id: car.id,
            name: `Sedan - ${car.drive}`,
            year: car.year,
            image: car.image[0],
            price: car.cost,
            mileage: car.milage,
            createdIn: car.country,
            fuelConsumption: `${car.volume} L`,
            engineType: car.fuel,
            likes: 0,
            description: car.description,
          }));
          setCars(apiCars);
        } else {
          console.error("Expected an array but received:", response.data);
        }
      })
      .catch((error) => {
        console.error(
          "Error fetching data:",
          error.response ? error.response.data : error.message
        );
      });
  }, []);

  const handleLike = (id) => {
    setCars((prevCars) =>
      prevCars.map((car) =>
        car.id === id
          ? {
              ...car,
              likes: likedCars.has(id) ? car.likes - 1 : car.likes + 1,
            }
          : car
      )
    );
    setLikedCars((prevLikes) => {
      const newLikes = new Set(prevLikes);
      if (newLikes.has(id)) {
        newLikes.delete(id);
      } else {
        newLikes.add(id);
      }
      return newLikes;
    });
  };

  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) {
      return;
    }
    setCurrentPage(pageNumber);
  };

  const getCurrentPageCars = () => {
    const startIndex = (currentPage - 1) * carsPerPage;
    const endIndex = startIndex + carsPerPage;
    return cars.slice(startIndex, endIndex);
  };

  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    window.scrollTo(0, 0);
    navigate(path);
  };

  return (
    <>
      <MotorcyclesFilters />
      <div className="p-4">
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-4">
            {getCurrentPageCars().map((car) => (
              <div key={car.id} className="border p-4 rounded-lg shadow-md">
                <Link to={`/motorcycles/${car.id}`}>
                  <button
                    onClick={() => handleLinkClick(`/motorcycles/${car.id}`)}
                    className="w-full h-40"
                  >
                    <img
                      src={car.image}
                      alt={`Car ${car.id}`}
                      className="w-full h-40 object-cover mb-2"
                    />
                  </button>
                </Link>
                <p className="text-lg font-bold">{car.name}</p>
                <div className="flex justify-between items-center">
                  <p className="text-lg font-bold">
                    ${car.price.toLocaleString()}
                  </p>
                  <p className="text-md text-gray-600">{car.year}</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-md text-gray-600"> {car.mileage} km</p>
                  <p className="text-md text-gray-600">{car.fuelConsumption}</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-md text-gray-600">{car.createdIn}</p>
                  <p className="text-md text-gray-600">{car.engineType}</p>
                </div>
                <p className="text-sm text-gray-800 mt-2">{car.description}</p>
                <div className="mt-2 flex justify-end items-center">
                  <button
                    onClick={() => handleLike(car.id)}
                    className={`py-1 px-2 rounded ${
                      likedCars.has(car.id) ? "bg-gray-400" : ""
                    }`}
                  >
                    {likedCars.has(car.id) ? (
                      <>
                        <IoHeartDislikeOutline className="mr-1" />
                      </>
                    ) : (
                      <>
                        <FcLike className="mr-1" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`px-4 py-2 mx-1 rounded-full transition-all duration-300 ease-in-out ${
                currentPage === index + 1
                  ? "bg-[#293843] text-white shadow-lg transform scale-110"
                  : "bg-slate-100 hover:bg-blue-500 hover:text-white hover:shadow-lg hover:scale-105"
              }`}
              style={{
                filter: currentPage === index + 1 ? "none" : "grayscale(100%)",
              }}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-end gap-2 m-4">
        <div>
          <b className="text-xl">
            <u>
              <button onClick={() => handleLinkClick("/motorcycles")}>
                <Link className="text-[#293843]" to="/motorcycles">
                  {translations[language].watchCatalog}
                </Link>
              </button>
            </u>
          </b>
        </div>
        <div>
          <MdOutlineArrowRightAlt size={30} />
        </div>
      </div>
    </>
  );
};

export default Motorcycles;
