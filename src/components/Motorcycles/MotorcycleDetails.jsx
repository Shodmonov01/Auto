import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axiosInstance from "../../axiosConfig";
import StillSelecting from "../StillSelecting";
import { AiOutlineMessage } from "react-icons/ai";
import { useLanguage } from "../Context/LanguageContext";

const CarDetails = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState(null);
  const { language } = useLanguage();
  const translations = {
    ru: {
      logo: "Марка",
      model: "Модель",
      year: "Год выпуска",
      milage: "Километры",
      color: "Цвет",
      engine: "Двигатель",
      horsepower: "Лошадиные силы",
      country: "Где произведен",
      description: "Описание",
      price: "Цена",
      notFound: "He найдено",
      rating: "Рейтинг",
      writeMessage: "Написать",
      carDescription: "Описание",
      carSpecs: "Технические характеристики",
      askSeller: "Задайте вопрос продавцу",
      hello: "Здравствуйте",
      deliveryTime: "Какой срок доставки?",
      originalPTS: "ПТС ОРИГИНАЛ?",
      gasType: "Какой бензин?",
      originalMilage: "Пробег оригинал?",
      inStock: "Автомобиль в наличии",
    },
    uzb: {
      logo: "Brend",
      model: "Model",
      year: "Yili",
      milage: "Kilometrlar",
      color: "Rang",
      engine: "Dvigatel",
      horsepower: "Ot kuchi",
      country: "Ishlab chiqarilgan mamlakat",
      description: "Tavsif",
      price: "Narx",
      notFound: "Topilmadi",
      rating: "Reyting",
      writeMessage: "Xabar yozing",
      carDescription: "Tavsif",
      carSpecs: "Texnik tavsifnoma",
      askSeller: "Sotuvchiga savol bering",
      hello: "Salom",
      deliveryTime: "Yetkazib berish muddati qancha?",
      originalPTS: "Asl PTS?",
      gasType: "Benzin turi?",
      originalMilage: "Asl yurilgan masofa?",
      inStock: "Avtomobil mavjud",
    },
    en: {
      logo: "Brand",
      model: "Model",
      year: "Year",
      milage: "Kilometers",
      color: "Color",
      engine: "Engine",
      horsepower: "Horsepower",
      country: "Country of Manufacture",
      description: "Description",
      price: "Price",
      notFound: "Not Found",
      rating: "Rating",
      writeMessage: "Write a Message",
      carDescription: "Description",
      carSpecs: "Technical Specifications",
      askSeller: "Ask the Seller",
      hello: "Hello",
      deliveryTime: "What is the delivery time?",
      originalPTS: "Original PTS?",
      gasType: "What type of gas?",
      originalMilage: "Original milage?",
      inStock: "The car is in stock",
    },
  };

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

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    setUserData(storedUserData ? JSON.parse(storedUserData) : null);
  }, []);

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
        <div className="bg-white shadow-xl rounded-lg overflow-hidden lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative">
            <img
              src={car.image[0]}
              alt={car.marka}
              className="w-full object-cover transition-transform transform hover:scale-105 rounded-lg"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-transparent opacity-30"></div>
          </div>
          <div className="p-6 lg:p-8 space-y-6">
            <h1 className="text-5xl font-extrabold text-gray-900 mb-8">
              {car.model} ({car.year})
            </h1>
            <div className="text-lg text-gray-700 space-y-2">
              <p>
                <span className="font-semibold text-gray-900">
                  {translations[language].logo}:
                </span>
                {car.marka}
              </p>
              <p>
                <span className="font-semibold text-gray-900">
                  {translations[language].model}:
                </span>
                {car.model}
              </p>
              <p>
                <span className="font-semibold text-gray-900">
                  {translations[language].year}:
                </span>
                {car.year}
              </p>
              <p>
                <span className="font-semibold text-gray-900">
                  {translations[language].milage}:
                </span>
                {car.milage.toLocaleString()} км
              </p>
              <p>
                <span className="font-semibold text-gray-900">
                  {translations[language].color}:
                </span>
                {car.color}
              </p>
              <p>
                <span className="font-semibold text-gray-900">
                  {translations[language].engine}:
                </span>
                {car.engine}
              </p>
              <p>
                <span className="font-semibold text-gray-900">
                  {translations[language].horsepower}:
                </span>
                {car.horsepower} л.c.
              </p>
              <p>
                <span className="font-semibold text-gray-900">
                  {translations[language].country}:
                </span>
                {car.country}
              </p>
              <p>
                <span className="font-semibold text-gray-900">
                  {translations[language].description}:
                </span>
                <br />
                {car.description}
              </p>
            </div>
            <p className="text-3xl font-bold text-gray-900">
              <span className="text-green-600">
                <span className="bg-blue-600 text-white px-4 py-2 rounded">
                  {translations[language].price}: ${car.cost.toLocaleString()}
                </span>
              </span>
            </p>
            {userData ? (
              <>
                <div className="flex items-center justify-between shadow p-2 rounded">
                  <div className="flex items-center gap-4">
                    <Link to={"/profile"}>
                      <p className="rounded-full py-2 px-4 flex items-center justify-center bg-[#EEEEEE]">
                        {userData.name
                          ? userData.name.charAt(0).toUpperCase()
                          : ""}
                      </p>
                    </Link>
                    <div className="flex flex-col">
                      <h1>{userData.name}</h1>
                      <p className="text-[#989898]">
                        {translations[language].rating} 5.0
                      </p>
                    </div>
                  </div>
                  <Link to={"/message"}>
                    <div className="border-l-2 border-[#F0F0F0] flex items-center gap-2 p-2">
                      <AiOutlineMessage className="text-blue-500" />
                      <p>{translations[language].writeMessage}</p>
                    </div>
                  </Link>
                </div>
              </>
            ) : (
              <h1 className="text-red">{translations[language].notFound}</h1>
            )}
          </div>
        </div>

        {/* Description Section */}
        <div className="my-4 bg-white shadow rounded p-4">
          <h1 className="font-bold text-[23px]">
            {translations[language].carDescription}
          </h1>
          <p>{car.description}</p>
        </div>

        {/* Technical Specifications Section */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left side - Car specifications */}
          <div className="mx-auto shadow rounded p-6">
            <h1 className="text-[23px] font-bold mb-6">
              {translations[language].carSpecs}
            </h1>
            <div className="flex gap-4 items-start">
              <div className="flex items-start space-x-10">
                <div className="space-y-4">
                  <p>
                    <span className="text-[#989898]">
                      {translations[language].logo}:
                    </span>
                    {car.mark}
                  </p>
                  <p>
                    <span className="text-[#989898]">
                      {translations[language].model}:
                    </span>
                    {car.body}
                  </p>
                  <p>
                    <span className="text-[#989898]">
                      {translations[language].year}:
                    </span>
                    {car.year}
                  </p>
                  <p>
                    <span className="text-[#989898]">
                      {translations[language].milage}:
                    </span>
                    {car.milage}
                  </p>
                  <p>
                    <span className="text-[#989898]">
                      {translations[language].color}:
                    </span>
                    {car.color}
                  </p>
                </div>
                <div className="space-y-4">
                  <p>
                    <span className="text-[#989898]">
                      {translations[language].engine}:
                    </span>
                    {car.engine}
                  </p>
                  <p>
                    <span className="text-[#989898]">
                      {translations[language].country}:
                    </span>
                    {car.country}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Seller's question section */}
          <div className="flex flex-col justify-center items-center bg-gray-100 shadow rounded p-6">
            <h1 className="text-[23px] font-bold mb-4">
              {translations[language].askSeller}
            </h1>
            <div className="flex items-center space-x-4 space-y-4">
              <div className="space-y-4">
                <button className="px-6 py-3 bg-[#293843] text-white rounded">
                  {translations[language].hello}
                </button>
                <button className="px-6 py-3 bg-[#293843] text-white rounded">
                  {translations[language].deliveryTime}
                </button>
                <button className="px-6 py-3 bg-[#293843] text-white rounded">
                  {translations[language].originalPTS}
                </button>
              </div>
              <div className="space-y-4">
                <button className="px-6 py-3 bg-[#293843] text-white rounded">
                  {translations[language].gasType}
                </button>
                <button className="px-6 py-3 bg-[#293843] text-white rounded">
                  {translations[language].originalMilage}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* StillSelecting Component */}
        <div className="my-12">
          <StillSelecting />
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
