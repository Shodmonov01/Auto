import React, { useState, useEffect } from "react";
import { FcLike } from "react-icons/fc";
import { IoHeartDislikeOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../axiosConfig";

const Favorite = () => {
  const [cars, setCars] = useState([]);
  const [likedCars, setLikedCars] = useState(new Set());

  useEffect(() => {
    axiosInstance
      .get("/cars")
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

  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    window.scrollTo(0, 0);
    navigate(path);
  };

  return (
    <div className="p-4">
      <div>
        <b className="text-2xl">Избранное</b>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-4">
          {cars.map((car) => (
            <div key={car.id} className="border p-4 rounded-lg shadow-md">
              <Link to={`/liked-car/${car.id}`}>
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
    </div>
  );
};

export default Favorite;
