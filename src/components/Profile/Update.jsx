import React, { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Automobile from "./UpdatedCars.jsx/Automobile";
import ElectricCar from "./UpdatedCars.jsx/ElectricCar";
import MotorBike from "./UpdatedCars.jsx/MotorBike";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdPhotoCamera } from "react-icons/md";

const Update = () => {
  const [photos, setPhotos] = useState([]);
  const handlePhotoUpload = (e) => {
    const files = Array.from(e.target.files);
    const newPhotos = files.map((file) => URL.createObjectURL(file));
    setPhotos((prevPhotos) => [...prevPhotos, ...newPhotos]);
  };
  const deletePhoto = (indexToDelete) => {
    setPhotos(photos.filter((_, index) => index !== indexToDelete));
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
            <select className="w-full bg-[#F6F6F6] p-4 rounded-[5px] my-[20px] text-[#989898] appearance-none">
              <option value="Марка">Марка</option>
              <option value="Марка">Марка</option>
            </select>
            <IoMdArrowDropdown
              className="absolute top-[50px] right-4 transform -translate-y-1/2 pointer-events-none"
              size={16}
            />
          </div>
          <div className="relative w-full">
            <select className="w-full bg-[#F6F6F6] p-4 rounded-[5px] text-[#989898] appearance-none">
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
            <select className="bg-[#F6F6F6] p-2 rounded-[5px]">
              <option value="2024">2024</option>
            </select>
          </div>
          <div className="flex justify-between items-center border-t py-4">
            <p className="text-[15px] text-[#989898]">Пробег</p>
            <select className="bg-[#F6F6F6] p-2 rounded-[5px]">
              <option value="16000">16000</option>
            </select>
          </div>
          <div className="flex justify-between items-center border-t py-4">
            <p className="text-[15px] text-[#989898]">Страна</p>
            <select className="bg-[#F6F6F6] p-2 rounded-[5px]">
              <option value="США">США</option>
            </select>
          </div>
          <div className="flex justify-between items-center border-t py-4">
            <p className="text-[15px] text-[#989898]">Топливо</p>
            <select className="bg-[#F6F6F6] p-2 rounded-[5px]">
              <option value="Бензин">Бензин</option>
            </select>
          </div>
          <div className="flex justify-between items-center border-t py-4">
            <p className="text-[15px] text-[#989898]">Объем</p>
            <select className="bg-[#F6F6F6] p-2 rounded-[5px]">
              <option value="1.8">1.8 л</option>
            </select>
          </div>
          <div className="flex justify-between items-center border-t py-4">
            <p className="text-[15px] text-[#989898]">Мощность</p>
            <select className="bg-[#F6F6F6] p-2 rounded-[5px]">
              <option value="133">133 л.c</option>
            </select>
          </div>
          <div className="flex justify-between items-center border-t py-4 ">
            <p className="text-[15px] text-[#989898]">Привод</p>
            <select className="bg-[#F6F6F6] p-2 rounded-[5px]">
              <option value="Передний">Передний</option>
            </select>
          </div>
          <div className="flex justify-between items-center border-t py-4">
            <p className="text-[15px] text-[#989898]">КПП</p>
            <select className="bg-[#F6F6F6] p-2 rounded-[5px]">
              <option value="автомат">автомат</option>
            </select>
          </div>
          <div className="flex justify-between items-center border-t py-4">
            <p className="text-[15px] text-[#989898]">Кузов</p>
            <select className="bg-[#F6F6F6] p-2 rounded-[5px]">
              <option value="Седан">Седан</option>
            </select>
          </div>
          <div className="flex justify-between items-center border-t py-4">
            <p className="text-[15px] text-[#989898]">Колличество дверей</p>
            <select className="bg-[#F6F6F6] p-2 rounded-[5px]">
              <option value="5">5</option>
            </select>
          </div>
          <div className="flex justify-between items-center border-t py-4">
            <p className="text-[15px] text-[#989898]">Состояние</p>
            <select className="bg-[#F6F6F6] p-2 rounded-[5px]">
              <option value="C пробегом">C пробегом</option>
            </select>
          </div>
          <div className="flex justify-between items-center border-t py-4">
            <p className="text-[15px] text-[#989898]">Цвет</p>
            <select className="bg-[#F6F6F6] p-2 rounded-[5px]">
              <option value="Белый">Белый</option>
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

          <div className="flex flex-wrap justify-center gap-4 mt-6 md:gap-6 lg:gap-8 xl:gap-10">
            {photos.map((photo, index) => (
              <div key={index} className="relative group">
                <img
                  src={photo}
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
