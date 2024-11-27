import React, { useState, useEffect } from "react";
import axiosInstance from "../../../config/axiosConfig";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { CiCircleMore } from "react-icons/ci";
import Loader from "../../../utils/Loader";
import { useNavigate } from "react-router-dom";

const Active = () => {
  const [cars, setCars] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedCarId, setSelectedCarId] = useState(null);
  const navigate = useNavigate();

  const token = localStorage.getItem("token") || "";

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axiosInstance.get("/user-dashboard", {
          headers: { Authorization: `Bearer ${token}` },
        });

        const carData = response?.data?.yours?.result?.cars;

        if (Array.isArray(carData)) {
          const formattedCars = carData.map((item) => ({
            id: item.id,
            name: item.name,
            price: item.cost,
            model: item.model,
            mark: item.brand,
            country: item.country,
            image: item.image[0],
            likes: item.liked,
            authoremail: item.authoremail,
            seen: item.seen,
          }));
          setCars(formattedCars);
        } else {
          console.error("Unexpected response format:", response.data);
        }
      } catch (error) {
        if (error.response?.status === 401) {
          localStorage.removeItem("token");
          localStorage.removeItem("userData");
          const nextUrl = window.location.pathname + window.location.search;
          navigate(`/login?nextUrl=${encodeURIComponent(nextUrl)}`);
        } else {
          console.error(
            "Error fetching car data:",
            error.response?.data || error.message
          );
        }
      }
    };

    fetchCars();
  }, [token, navigate]);

  const Dialog = ({ carId }) => (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-4 shadow-lg w-96 relative">
        <button
          onClick={() => setIsDialogOpen(false)}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <FaTimes size={20} />
        </button>

        <div className="flex flex-col space-y-4">
          <Link
            className="text-[#293843] text-[15px] font-medium hover:text-blue-600 transition-all duration-200"
            to={`/update`}
          >
            Опубликовать
          </Link>
          <Link
            className="text-[#293843] text-[15px] font-medium hover:text-blue-600 transition-all duration-200"
            to={`/update/automobile/${carId}`}
          >
            Редактировать
          </Link>
          <Link
            className="text-[#293843] text-[15px] font-medium ml-4 hover:text-red-600 transition-all duration-200"
            to={"/profile/myupdate/archive"}
          >
            Удалить
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex w-full flex-wrap items-start bg-white shadow-md rounded-lg p-4 mx-auto">
      {cars.length > 0 ? (
        cars.map((car) => (
          <div
            key={car.id}
            className="flex flex-col md:flex-row w-full items-start bg-white shadow-md rounded-lg p-4 mb-4"
          >
            <div className="w-full md:w-1/2 flex gap-4">
              <img
                src={car.image}
                alt={car.name}
                className="w-full md:w-[186px] h-[125px] object-cover rounded-lg"
              />
              <div>
                <h2 className="text-lg md:text-xl text-gray-800">{car.name}</h2>
                <p className="text-sm md:text-lg font-semibold">{car.price}$</p>
                <p className="text-sm md:text-base">{car.country}</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 mt-4 md:mt-0 md:pl-4 space-y-2">
              <div className="flex space-x-2">
                <FaRegEye />
                <p className="text-sm text-gray-600">{car.seen}</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gray-500">❤️</span>
                <p className="text-sm">{car.likes}</p>
              </div>
            </div>
            <button
              onClick={() => {
                setSelectedCarId(car.id);
                setIsDialogOpen(true);
              }}
              className="mt-4 md:mt-0 ml-auto md:ml-0"
            >
              <CiCircleMore size={24} />
            </button>
          </div>
        ))
      ) : (
        <div>
          <Loader className="h-auto" />
        </div>
      )}

      {isDialogOpen && (
        <Dialog carId={selectedCarId} onClose={() => setIsDialogOpen(false)} />
      )}
    </div>
  );
};

export default Active;
