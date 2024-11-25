import React, { useState, useEffect } from "react";
import { FcLike } from "react-icons/fc";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../config/axiosConfig";
import { useLanguage } from "../components/Context/LanguageContext";
import Swal from "sweetalert2";

const MainPageCarsCatalog = () => {
  const [cars, setCars] = useState([]);
  const [likedId, setLikedId] = useState();
  const { language } = useLanguage();
  const storedUserData = JSON.parse(localStorage.getItem("userData"));
  const navigate = useNavigate();

  const translations = {
    ru: { catalog: "АВТОМОБИЛЬНЫЙ КАТАЛОГ", watchCatalog: "Перейти в каталог" },
    uzb: { catalog: "AVTO KATALOGI", watchCatalog: "Katalogga o'ting" },
    en: { catalog: "AUTOMOBILE CATALOG", watchCatalog: "Go to the catalog" },
  };
  useEffect(() => {
    const savedLike = JSON.parse(localStorage.getItem("likedCars")) || [];
    setLikedId(savedLike);
  }, []);

  useEffect(() => {
    axiosInstance
      .get("/cars")
      .then((response) => {
        if (Array.isArray(response.data)) {
          const apiCars = response.data.slice(-6).map((car) => ({
            id: car.id,
            name: car.model,
            year: car.year,
            image: car.image[0],
            price: car.cost,
            mileage: car.milage,
            createdIn: car.country,
            fuelConsumption: `${car.volume} L`,
            engineType: car.fuel,
            likes: 0,
            drive: car.drive,
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

  const toggleLike = (id) => {
    let ids = [...likedId];
    if (!likedId.includes(id)) {
      ids.push(id);
    } else {
      ids = ids.filter((item) => item !== id);
    }
    localStorage.setItem("likedCars", JSON.stringify(ids));
    setLikedId(ids);
    const isLiked = ids.includes(id) ? 1 : -1;
    if (!storedUserData) {
      navigate("/login");
    }
    axiosInstance.post(
      `/liked-car/${id}?user_id=${storedUserData.id}&count=${isLiked}`
    );
  };

  const handleLinkClick = (path) => {
    window.scrollTo(0, 0);
    navigate(path);
  };
  const handleLikeButton = () => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      icon: "success",
      title: "Liked successfully!",
    });
  };

  const handleUnLikeButton = () => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      icon: "warning",
      title: "Unfortunately unliked!",
    });
  };

  return (
    <>
      <div className=" mx-2 mb-2 lg:mx-[72px] lg:mb-2">
        <b className="text-2xl">{translations[language].catalog}</b>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-4">
          {cars.map((car) => (
            <div
              key={car.id}
              className="h-[450px] border  rounded-lg shadow-md"
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
              <div className="px-4 py-2">
                <p className="text-lg">
                  {car.name}, {car.year}
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-lg font-bold">
                    ${car.price}
                  </p>
                  <p className="text-md text-gray-600">{car.drive}</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-md text-gray-600">{car.mileage} km</p>
                  <p className="text-md text-gray-600">{car.fuelConsumption}</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-md text-gray-600">{car.createdIn}</p>
                  <p className="text-md text-gray-600">{car.engineType}</p>
                </div>
                <div className="mt-2 flex justify-end items-center">
                  <button
                    onClick={() => toggleLike(car.id)}
                    className={` px-2 rounded `}
                  >
                    {likedId.includes(car.id) ? (
                      <FcLike onClick={handleUnLikeButton} size={24} />
                    ) : (
                      <span
                        onClick={handleLikeButton}
                        className="material-symbols-outlined"
                      >
                        favorite
                      </span>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="flex justify-center mt-8">
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
        </div>*/}
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
