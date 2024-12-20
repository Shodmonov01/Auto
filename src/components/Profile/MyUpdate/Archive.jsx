import React, { useState, useEffect } from "react";
import axiosInstance from "../../../config/axiosConfig";
import { FaRegEye } from "react-icons/fa";
import { CiCircleMore } from "react-icons/ci";
import Loader from "../../../utils/Loader";

const REASONS = ["Sold on YouCar", "Sold elsewhere", "Other reason"];

const Archive = () => {
  const [cars, setCars] = useState([]); // Store cars as an array
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null); // Selected car for dialog
  const [deleteReason, setDeleteReason] = useState("");

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
        console.error(
          "Error fetching car data:",
          error.response?.data || error.message
        );
      }
    };

    fetchCars();
  }, [token]);

  const handleDelete = async () => {
    if (!selectedCar || !deleteReason) {
      alert("Please select a reason for deletion.");
      return;
    }

    try {
      await axiosInstance.delete(`/delete-car/${selectedCar.id}`, {
        params: { authoremail: selectedCar.authoremail, reason: deleteReason },
      });
      console.log("Car deleted successfully");

      setCars((prevCars) =>
        prevCars.filter((car) => car.id !== selectedCar.id)
      );
      setSelectedCar(null);
      setDeleteReason("");
      setIsDialogOpen(false);
    } catch (error) {
      console.error(
        "Error deleting car:",
        error.response?.data || error.message
      );
    }
  };

  const Dialog = ({ car, onClose, onDelete }) => (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-4 shadow-lg w-96">
        <div className="flex justify-between items-center">
          <img
            className="w-32 h-32 object-contain"
            src={car.image}
            alt={car.name}
          />
          <div className="text-right">
            <p className="text-lg font-semibold">{car.model}</p>
            <p className="text-lg font-semibold">${car.price}</p>
            <p>{car.country}</p>
          </div>
        </div>
        <h1 className="mt-4 text-lg font-semibold">Select a reason</h1>
        <div className="mt-2 space-y-2">
          {REASONS.map((reason) => (
            <div key={reason} className="flex items-center space-x-2">
              <input
                type="radio"
                name="deleteReason"
                value={reason}
                onChange={(e) => setDeleteReason(e.target.value)}
                className="focus:ring-blue-500"
              />
              <label className="text-gray-700">{reason}</label>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <button
            onClick={onDelete}
            className="bg-blue-600 text-white px-4 py-2 rounded mr-2 hover:bg-blue-700 transition"
          >
            Delete
          </button>
          <button
            onClick={onClose}
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition"
          >
            Cancel
          </button>
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
                setSelectedCar(car);
                setIsDialogOpen(true);
              }}
              className="mt-4 md:mt-0 ml-auto md:ml-0"
            >
              <CiCircleMore size={24} />
            </button>
          </div>
        ))
      ) : (
        <p>
          <Loader />
        </p>
      )}

      {isDialogOpen && selectedCar && (
        <Dialog
          car={selectedCar}
          onClose={() => setIsDialogOpen(false)}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default Archive;
