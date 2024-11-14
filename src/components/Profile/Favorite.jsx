import React, { useState, useEffect } from "react";
import { FcLike } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../axiosConfig";

const Favorite = () => {
  const [cars, setCars] = useState([]);
  const storedUserData = localStorage.getItem("userData");
  const userEmail = storedUserData ? JSON.parse(storedUserData).email : null;
  const navigate = useNavigate();

  useEffect(() => {
    if (!userEmail) {
      console.error("No user email found in localStorage.");
      return;
    }

    const fetchFavorites = async () => {
      try {
        const response = await axiosInstance.get(
          `/favourite?user_email=${userEmail}`
        );

        // Check if response.data is an object and contains an array of cars
        if (
          response.data &&
          response.data.cars &&
          Array.isArray(response.data.cars)
        ) {
          const apiCars = response.data.cars.map((car) => ({
            id: car.id,
            name: `Sedan - ${car.drive}`,
            year: car.year,
            image: car.image[0], // Assuming image is an array
            price: car.cost,
            mileage: car.milage,
            createdIn: car.country,
            fuelConsumption: `${car.volume} L`,
            engineType: car.fuel,
            description: car.description,
          }));
          setCars(apiCars);
        } else {
          console.error(
            "Expected an array of cars in response.data.cars, but received:",
            response.data
          );
        }
      } catch (error) {
        console.error(
          "Error fetching data:",
          error.response?.data || error.message
        );
      }
    };

    fetchFavorites();
  }, [userEmail]);

  const handleLinkClick = (path) => {
    window.scrollTo(0, 0);
    navigate(path);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Избранное</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-4">
        {cars.map((car) => (
          <div key={car.id} className="border p-4 rounded-lg shadow-md">
            <Link to={`/about-cars/${car.id}`}>
              <button
                onClick={() => handleLinkClick(`/about-cars/${car.id}`)}
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
              <p className="text-lg font-bold">${car.price.toLocaleString()}</p>
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
              <button className={`py-1 px-2 rounded`}>
                <FcLike className="mr-1" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorite;
