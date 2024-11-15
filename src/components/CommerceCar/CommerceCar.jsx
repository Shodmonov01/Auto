import React, { useState, useEffect } from "react";
import { FcLike } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../axiosConfig";
import CommerceFilters from "./CommerceFilters";
import StillSelecting from "../StillSelecting";

const Katalog = () => {
  const [pageSize, setPageSize] = useState(12);
  const [cars, setCars] = useState([]);
  const [likedId, setLikedId] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const storedUserData = JSON.parse(localStorage.getItem("userData"));

  useEffect(() => {
    const savedLikes =
      JSON.parse(localStorage.getItem("LikedCommerce-car")) || [];
    setLikedId(savedLikes);
  }, []);

  useEffect(() => {
    axiosInstance
      .get("/commerce-cars", { params: { page: currentPage, pageSize } })
      .then((response) => {
        console.log("API Response:", response.data);

        if (Array.isArray(response.data)) {
          const apiCars = response.data.map((car) => ({
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
  }, [currentPage, pageSize]);

  const toggleLike = (id) => {
    let ids = [...likedId];
    if (!likedId.includes(id)) {
      ids.push(id);
    } else {
      ids = ids.filter((item) => item !== id);
    }
    localStorage.setItem("LikedCommerce-car", JSON.stringify(ids));
    setLikedId(ids);
    const isLiked = ids.includes(id) ? 1 : -1;
    if (!storedUserData.id) {
      navigate("/login");
    }
    axiosInstance.get(
      `/liked-commerce/${id}?user_id=${storedUserData.id}&count=${isLiked}`
    );
  };

  const handlePageChange = (pageNumber) => {
    if (currentPage === pageNumber) {
      setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    } else {
      setCurrentPage(pageNumber);
    }
  };
  const totalPages = 4;

  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    window.scrollTo(0, 0);
    navigate(path);
  };

  return (
    <>
      <CommerceFilters />
      <div className="p-2 m-2 lg:mx-[72px]">
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-4">
            {cars.map((car) => (
              <div
                key={car.id}
                className="h-[450px] border rounded-lg shadow-md"
              >
                <Link to={`/commerce-cars/${car.id}`}>
                  <button
                    onClick={() => handleLinkClick(`/commerce-cars/${car.id}`)}
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
                      ${car.price.toLocaleString()}
                    </p>
                    <p>{car.drive}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-md text-gray-600"> {car.mileage} km</p>
                    <p className="text-md text-gray-600">
                      {car.fuelConsumption}
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-md text-gray-600">{car.createdIn}</p>
                    <p className="text-md text-gray-600">{car.engineType}</p>
                  </div>
                </div>
                <div className="mt-2 flex justify-end items-center">
                  <button
                    onClick={() => toggleLike(car.id)}
                    className={`py-1 px-2 rounded `}
                  >
                    {likedId.includes(car.id) ? (
                      <FcLike size={24} />
                    ) : (
                      <span className="material-symbols-outlined text-[#989898]">
                        favorite
                      </span>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
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
      <StillSelecting />
    </>
  );
};

export default Katalog;
