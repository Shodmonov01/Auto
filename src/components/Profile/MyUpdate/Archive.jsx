import React, { useState, useEffect } from "react";
import axiosInstance from "../../../config/axiosConfig";
import { PiDotsThreeCircleVerticalLight } from "react-icons/pi";

const Archive = () => {
  const [car, setCar] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [deleteReason, setDeleteReason] = useState("");

  const fetchCarData = async () => {
    try {
      const response = await axiosInstance.get("/cars", {
        params: { page: 1, pageSize: 3 },
      });
      if (Array.isArray(response.data) && response.data.length > 0) {
        const carData = response.data[0];
        setCar({
          id: carData.id,
          name: `Sedan - ${carData.drive}`,
          price: carData.cost,
          model: carData.model,
          mark: carData.brand,
          country: carData.country,
          image: carData.image[0],
          likes: 0,
          authoremail: carData.authoremail,
        });
      } else {
        console.error("Expected an array but received:", response.data);
      }
    } catch (error) {
      console.error(
        "Error fetching data:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const handleDelete = async () => {
    if (car && deleteReason) {
      try {
        console.log(car.id);
        await axiosInstance.delete(`/delete-car/${car.id}`, {
          data: { authoremail: car.authoremail, reason: deleteReason },
        });
        console.log("Car deleted successfully");
        setCar(null);
        setIsDialogOpen(false);
      } catch (error) {
        console.error(
          "Error deleting car:",
          error.response ? error.response.data : error.message
        );
      }
    } else {
      alert("Please select a reason for deletion.");
    }
  };

  useEffect(() => {
    fetchCarData();
  }, []);

  return (
    <div className="flex w-full items-start bg-white shadow-md rounded-lg p-4 mx-auto">
      {car ? (
        <>
          <div className="w-1/2">
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="w-1/2 pl-4 space-y-2">
            <h2 className="text-xl font-bold text-gray-800">{car.name}</h2>
            <p className="text-sm text-gray-600">Model: {car.model}</p>
            <p className="text-sm text-gray-600">Mark: {car.mark}</p>
            <p className="text-lg font-semibold text-blue-600">
              Price: ${car.price}
            </p>
            <div className="flex items-center space-x-2">
              <span className="text-gray-500">❤️</span>
              <p className="text-sm">{car.likes} likes</p>
            </div>
          </div>
          <button onClick={() => setIsDialogOpen(true)}>
            <PiDotsThreeCircleVerticalLight size={24} />
          </button>
        </>
      ) : (
        <p className="text-center text-gray-500">Loading...</p>
      )}

      {isDialogOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-4 shadow-lg w-96">
            <div className="flex justify-between items-center">
              <img
                className="w-32 h-32 object-contain"
                src={car.image}
                alt={car.name}
              />
              <div className="flex flex-col text-right">
                <p className="text-lg font-semibold">{car.model}</p>
                <p className="text-lg font-semibold">${car.price}</p>
                <p>{car.country}</p>
              </div>
            </div>
            <h1 className="mt-4 text-lg font-semibold">Select a reason</h1>
            <div className="mt-2 space-y-2">
              {["Sold on YouCar", "Sold elsewhere", "Other reason"].map(
                (reason) => (
                  <div key={reason} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="deleteReason"
                      value={reason}
                      onChange={(e) => setDeleteReason(e.target.value)}
                      className="focus:ring-blue-500"
                      required
                    />
                    <label className="text-gray-700">{reason}</label>
                  </div>
                )
              )}
            </div>
            <div className="flex justify-center mt-4">
              <button
                onClick={handleDelete}
                className="bg-blue-600 text-white px-4 py-2 rounded mr-2 hover:bg-blue-700 transition"
              >
                Delete
              </button>
              <button
                onClick={() => setIsDialogOpen(false)}
                className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Archive;
