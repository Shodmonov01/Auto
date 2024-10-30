import React, { useEffect, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Automobile from "./UpdatedCars.jsx/Automobile";
import ElectricCar from "./UpdatedCars.jsx/ElectricCar";
import MotorBike from "./UpdatedCars.jsx/MotorBike";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdPhotoCamera } from "react-icons/md";
import axiosInstance from "../../axiosConfig";

const Update = () => {
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    mark: "BMW",
    country: "Uzbekistan",
    model: "BMW",
    cost: 200000,
    year: 2024,
    mileage: 100,
    engine: "fuel",
    volume: 5.0,
    authoremail: "javohiryusupovvv2006@gmail.com",
    horsepower: 500,
    drive: "AWD",
    checkpoint: "automatic",
    bodyType: "Sedan",
    doors: "4",
    statement: "new",
    color: "red",
    stock: 1,
    image: [
      "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?cs=srgb&dl=pexels-mikebirdy-112460.jpg&fm=jpg",
    ],
  });

  const handleOptionChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handlePhotoUpload = (e) => {
    const files = Array.from(e.target.files[0]);
    let validFiles = [];

    files.forEach((file) => {
      if (file.size > 1024 * 1024 * 2) {
        setError("rasmni hajmi 2 mb dan kam bo'lishi kerak");
      } else {
        setError("");
        const imgUrl = URL.createObjectURL(file);
        validFiles.push(imgUrl);
      }
    });

    setFormData((prev) => ({
      ...prev,
      image: [...prev.image, ...validFiles],
    }));
  };

  const deletePhoto = (index) => {
    setFormData((prev) => ({
      ...prev,
      image: prev.image.filter((_, i) => i !== index),
    }));
  };

  console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/add-car", formData);
      console.log("Car added successfully:", response.data);
    } catch (error) {
      console.error("Error adding car:", error);
    }
  };

  return (
    <>
      <div className="flex justify-end px-4 pt-4">
        <Link
          to={"/profile"}
          className="text-[#2684E5] cursor-pointer hover:underline"
        >
          Закрыть
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <div className="w-full max-w-[792px] p-6 md:p-10 lg:p-14 rounded-[10px] shadow">
          <div className="flex justify-center items-center">
            <h1 className="text-[35px] font-bold">Разместите объявление</h1>
          </div>
          <div className="flex justify-center items-center">
            <p className="text-[15px]">
              Укажите данные oб автомобиле для размещения объявления
            </p>
          </div>
          <br />
          <nav className="flex bg-[#F4F4F4] justify-between items-center border rounded-l-[50px] rounded-r-[50px]">
            <Link
              to={"automobile"}
              className="font-bold py-2 px-4 rounded-full hover:bg-white transition duration-300 ease-in-out transform hover:scale-102"
            >
              Automobile
            </Link>
            <Link
              to={"electric"}
              className="font-bold py-2 px-4 rounded-full hover:bg-white transition duration-300 ease-in-out transform hover:scale-102"
            >
              Electric Car
            </Link>
            <Link
              to={"motorbike"}
              className="font-bold py-2 px-4 rounded-full hover:bg-white transition duration-300 ease-in-out transform hover:scale-102"
            >
              Motorbike
            </Link>
          </nav>
          <div className="relative w-full">
            <select
              value={formData.brand}
              onChange={(e) => handleOptionChange("brand", e.target.value)}
              className="w-full bg-[#F6F6F6] p-4 rounded-[5px] my-[20px] text-[#989898] appearance-none"
            >
              <option value="Марка">Марка</option>
              <option value="Марка">Марка</option>
            </select>
            <IoMdArrowDropdown
              className="absolute top-[50px] right-4 transform -translate-y-1/2 pointer-events-none"
              size={16}
            />
          </div>
          <div className="relative w-full">
            <select
              value={formData.modelv}
              onChange={(e) => handleOptionChange("model", e.target.value)}
              className="w-full bg-[#F6F6F6] p-4 rounded-[5px] text-[#989898] appearance-none"
            >
              <option value="Модель">Модель</option>
              <option value="Модель">Модель</option>
            </select>
            <IoMdArrowDropdown
              className="absolute top-[28px] right-4 transform -translate-y-1/2 pointer-events-none"
              size={16}
            />
          </div>
          <br />
          <div>
            <h1 className="text-[25px] font-bold">Характеристики</h1>
          </div>
          <div className="flex justify-between items-center border-t py-4 mt-2">
            <p className="text-[15px] text-[#989898]">Год выпуска</p>
            <select
              value={formData.year}
              onChange={(e) => handleOptionChange("year", e.target.value)}
              className="bg-[#F6F6F6] p-2 rounded-[5px]"
            >
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
            </select>
          </div>
          <div className="flex justify-between items-center border-t py-4">
            <p className="text-[15px] text-[#989898]">Пробег</p>
            <select
              value={formData.mileage}
              onChange={(e) => handleOptionChange("milage", e.target.value)}
              className="bg-[#F6F6F6] p-2 rounded-[5px]"
            >
              <option value="16000">15000</option>
              <option value="16000">16000</option>
              <option value="16000">17000</option>
            </select>
          </div>
          <div className="flex justify-between items-center border-t py-4">
            <p className="text-[15px] text-[#989898]">Страна</p>
            <select
              value={formData.country}
              onChange={(e) => handleOptionChange("country", e.target.value)}
              className="bg-[#F6F6F6] p-2 rounded-[5px]"
            >
              <option value="США">США</option>
              <option value="Russia">Russia</option>
              <option value="Uzbekistan">Uzbekistan</option>
            </select>
          </div>
          <div className="flex justify-between items-center border-t py-4">
            <p className="text-[15px] text-[#989898]">Топливо</p>
            <select
              value={formData.fuel}
              onChange={(e) => handleOptionChange("fuel", e.target.value)}
              className="bg-[#F6F6F6] p-2 rounded-[5px]"
            >
              <option value="Бензин">Бензин</option>
              <option value="Gas">Gas</option>
              <option value="Disel">Disel</option>
            </select>
          </div>
          <div className="flex justify-between items-center border-t py-4">
            <p className="text-[15px] text-[#989898]">Объем</p>
            <select
              value={formData.volume}
              onChange={(e) => handleOptionChange("volume", e.target.value)}
              className="bg-[#F6F6F6] p-2 rounded-[5px]"
            >
              <option value="1.8">1.8 л</option>
            </select>
          </div>
          <div className="flex justify-between items-center border-t py-4">
            <p className="text-[15px] text-[#989898]">Мощность</p>
            <select
              value={formData.power}
              onChange={(e) => handleOptionChange("power", e.target.value)}
              className="bg-[#F6F6F6] p-2 rounded-[5px]"
            >
              <option value="133">133 л.c</option>
              <option value="200">200 л.c</option>
              <option value="300">300 л.c</option>
            </select>
          </div>
          <div className="flex justify-between items-center border-t py-4 ">
            <p className="text-[15px] text-[#989898]">Привод</p>
            <select
              value={formData.drive}
              onChange={(e) => handleOptionChange("drive", e.target.value)}
              className="bg-[#F6F6F6] p-2 rounded-[5px]"
            >
              <option value="Передний">Передний</option>
              <option value="Передний">Передний</option>
            </select>
          </div>
          <div className="flex justify-between items-center border-t py-4">
            <p className="text-[15px] text-[#989898]">КПП</p>
            <select
              value={formData.transmission}
              onChange={(e) =>
                handleOptionChange("transmission", e.target.value)
              }
              className="bg-[#F6F6F6] p-2 rounded-[5px]"
            >
              <option value="автомат">автомат</option>
              <option value="mexanik">mexanik</option>
            </select>
          </div>
          <div className="flex justify-between items-center border-t py-4">
            <p className="text-[15px] text-[#989898]">Кузов</p>
            <select
              value={formData.bodyType}
              onChange={(e) => handleOptionChange("bodyType", e.target.value)}
              className="bg-[#F6F6F6] p-2 rounded-[5px]"
            >
              <option value="Седан">Седан</option>
              <option value="Crossover">Crossover</option>
            </select>
          </div>
          <div className="flex justify-between items-center border-t py-4">
            <p className="text-[15px] text-[#989898]">Колличество дверей</p>
            <select
              value={formData.doors}
              onChange={(e) => handleOptionChange("doors", e.target.value)}
              className="bg-[#F6F6F6] p-2 rounded-[5px]"
            >
              <option value="5">5</option>
              <option value="4">4</option>
              <option value="2">2</option>
            </select>
          </div>
          <div className="flex justify-between items-center border-t py-4">
            <p className="text-[15px] text-[#989898]">Состояние</p>
            <select
              value={formData.statement}
              onChange={(e) => handleOptionChange("statement", e.target.value)}
              className="bg-[#F6F6F6] p-2 rounded-[5px]"
            >
              <option value="C пробегом">C пробегом</option>
            </select>
          </div>
          <div className="flex justify-between items-center border-t py-4">
            <p className="text-[15px] text-[#989898]">Цвет</p>
            <select
              value={formData.color}
              onChange={(e) => handleOptionChange("color", e.target.value)}
              className="bg-[#F6F6F6] p-2 rounded-[5px]"
            >
              <option value="Белый">Белый</option>
              <option value="red">red</option>
            </select>
          </div>
          <div className="flex gap-6 itmes-center">
            <div className="flex items-center gap-2 mt-[25px]">
              <input type="radio" name="option" />
              <p>B наличии</p>
            </div>
            <div className="flex items-center gap-2 mt-[25px]">
              <input type="radio" name="option" />
              <p>Под заказ</p>
            </div>
          </div>
        </div>
        <br />

        <div className="w-full max-w-[792px] flex flex-col p-24 shadow-lg justify-center rounded-[10px] items-center bg-white shadow">
          <h1 className="text-2xl font-bold text-gray-800 mb-4 self-start">
            Фото
          </h1>
          <p className="text-gray-600 mb-6 text-xs">
            Загрузите фото вашего автомобиля четко c разных ракурсов!
          </p>

          <div>
            <label className="flex flex-col items-center justify-center w-full h-48 bg-gray-100 rounded-lg shadow-md cursor-pointer hover:bg-gray-200 transition-all duration-300 ease-in-out">
              <MdPhotoCamera className="text-5xl text-[#2684E5] mb-2" />
              <span className="text-[#2684E5] font-semibold">
                Нажмите для выбора фото
              </span>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handlePhotoUpload}
                className="hidden"
              />
            </label>

            {error && <p className="text-red-500">{error}</p>}

            <div className="flex flex-wrap justify-center gap-4 mt-6 md:gap-6 lg:gap-8 xl:gap-10">
              {formData.image.map((imgUrl, index) => (
                <div key={index} className="relative group">
                  <img
                    src={imgUrl}
                    alt={`uploaded preview ${index + 1}`}
                    className="w-40 h-40 object-cover rounded-lg shadow-md"
                  />
                  <button
                    onClick={() => deletePhoto(index)}
                    className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <button onClick={handleSubmit}>collect</button>
        </div>
        <div className="mt-8 w-full flex justify-center">
          <Routes>
            <Route path="automobile" element={<Automobile />} />
            <Route path="electric" element={<ElectricCar />} />
            <Route path="motorbike" element={<MotorBike />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Update;
