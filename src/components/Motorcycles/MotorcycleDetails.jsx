import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../axiosConfig";
import StillSelecting from "../StillSelecting";

const MotorcycleDetails = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCar = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get(`/motorcycles/${id}`);
        setCar(response.data);
      } catch (error) {
        setError(error.response ? error.response.data.message : error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCar();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <div className="loader animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold text-red-600">{error}</h1>
      </div>
    );
  }

  if (!car) {
    return null;
  }

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-8 text-center">
          {car.body} - {car.year}
        </h1>
        <div className="bg-white shadow-xl rounded-lg overflow-hidden lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative">
            <img
              src={car.image[0]}
              alt={car.body}
              className="w-full object-cover transition-transform transform hover:scale-105 rounded-lg"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-transparent opacity-30"></div>
          </div>
          <div className="p-6 lg:p-8 space-y-6">
            <p className="text-3xl font-bold text-gray-900">
              <span className="text-green-600">
                ${car.cost.toLocaleString()}
              </span>
            </p>
            <div className="text-lg text-gray-700 space-y-2">
              <p>
                <span className="font-semibold text-gray-900">Country:</span>
                {car.country}
              </p>
              <p>
                <span className="font-semibold text-gray-900">Year:</span>
                {car.year}
              </p>
              <p>
                <span className="font-semibold text-gray-900">Mileage:</span>
                {car.milage.toLocaleString()} km
              </p>
              <p>
                <span className="font-semibold text-gray-900">Doors:</span>
                {car.doors}
              </p>
              <p>
                <span className="font-semibold text-gray-900">Drive:</span>
                {car.drive}
              </p>
              <p>
                <span className="font-semibold text-gray-900">Engine:</span>
                {car.engine}
              </p>
              <p>
                <span className="font-semibold text-gray-900">Horsepower:</span>
                {car.horsepower} HP
              </p>
              <p>
                <span className="font-semibold text-gray-900">Volume:</span>
                {car.volume} L
              </p>
              <p>
                <span className="font-semibold text-gray-900">Statement:</span>
                {car.statement}
              </p>
              <p>
                <span className="font-semibold text-gray-900">
                  Description:
                </span>
                <br />
                {car.description}
              </p>
            </div>
            <div className="flex justify-center">
              <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors">
                <a href="/">Inquire Now</a>
              </button>
            </div>
          </div>
        </div>
        <div className="my-12">
          <StillSelecting />
        </div>
      </div>
    </div>
  );
};

export default MotorcycleDetails;
