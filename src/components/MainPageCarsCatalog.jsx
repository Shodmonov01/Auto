import React, { useState, useEffect } from "react";
import { FcLike } from "react-icons/fc";
import { IoHeartDislikeOutline } from "react-icons/io5";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../axiosConfig";
import { useLanguage } from "../components/Context/LanguageContext";

const MainPageCarsCatalog = () => {
  const [cars, setCars] = useState([]);
  const [likedCars, setLikedCars] = useState(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(12);
  const { language } = useLanguage();

  const translations = {
    ru: { catalog: "АВТОМОБИЛЬНЫЙ КАТАЛОГ", watchCatalog: "Перейти в каталог" },
    uzb: { catalog: "AVTO KATALOGI", watchCatalog: "Katalogga o'ting" },
    en: { catalog: "AUTOMOBILE CATALOG", watchCatalog: "Go to the catalog" },
  };

  useEffect(() => {
    axiosInstance
      .get("/cars", { params: { page: currentPage, pageSize } })
      .then((response) => {
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
  }, [currentPage, pageSize]);

  const handlePageChange = (pageNumber) => {
    if (currentPage === pageNumber) {
      setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    } else {
      setCurrentPage(pageNumber);
    }
  };
  const totalPages = 4;

  const handleLike = (id) => {
    setCars((prevCars) =>
      prevCars.map((car) =>
        car.id === id
          ? { ...car, likes: likedCars.has(id) ? car.likes - 1 : car.likes + 1 }
          : car
      )
    );
    setLikedCars((prevLikes) => {
      const newLikes = new Set(prevLikes);
      if (newLikes.has(id)) newLikes.delete(id);
      else newLikes.add(id);
      return newLikes;
    });
  };

  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    window.scrollTo(0, 0);
    navigate(path);
  };

  return (
    <>
      <div className=" mx-2 mb-2 lg:mx-[72px] lg:mb-2">
        <b className="text-2xl">{translations[language].catalog}</b>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-4">
          {cars.map((car) => (
            <div
              key={car.id}
              className="h-[500px] border px-4 py-2 rounded-lg shadow-md"
            >
              <Link to={`/about-cars/${car.id}`}>
                <button
                  onClick={() => handleLinkClick(`/about-cars/${car.id}`)}
                  className="w-full h-48 sm:h-52 md:h-60 lg:h-64"
                >
                  <img
                    src={car.image}
                    alt={`Car ${car.id}`}
                    className="w-full h-full rounded object-cover mb-2"
                  />
                </button>
              </Link>
              <p className="text-lg">{car.name}</p>
              <div className="flex justify-between items-center">
                <p className="text-lg font-bold">
                  ${car.price.toLocaleString()}
                </p>
                <p className="text-md text-gray-600">{car.year}</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-md text-gray-600">{car.mileage} km</p>
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
                  className={` px-2 rounded ${
                    likedCars.has(car.id) ? "bg-gray-400" : ""
                  }`}
                >
                  {likedCars.has(car.id) ? (
                    <IoHeartDislikeOutline className="mr-1" />
                  ) : (
                    <FcLike className="mr-1" />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          {[...Array(totalPages).keys()].map((_, index) => {
            const pageNumber = index + 1;
            return (
              <button
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                className={`px-4 py-2 mx-1 rounded-full transition-all duration-300 ease-in-out ${
                  currentPage === pageNumber
                    ? "bg-[#293843] text-white shadow-lg transform scale-110"
                    : "bg-slate-100 hover:bg-blue-500 hover:text-white hover:shadow-lg hover:scale-105"
                }`}
                style={{
                  filter:
                    currentPage === pageNumber ? "none" : "grayscale(100%)",
                }}
              >
                {pageNumber}
              </button>
            );
          })}
        </div>
      </div>
      <div className="flex items-center justify-end gap-[10px] m-4">
        <div>
          <b className="text-xl">
            <u>
              <button onClick={() => handleLinkClick("/about-cars")}>
                <Link
                  className="text-[#293843] underline text-[15px] hover:text-black"
                  to="/about-cars"
                >
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

export default MainPageCarsCatalog;
