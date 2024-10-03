import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Automobile from "./UpdatedCars.jsx/Automobile";
import ElectricCar from "./UpdatedCars.jsx/ElectricCar";
import MotorBike from "./UpdatedCars.jsx/MotorBike";
import { IoMdArrowDropdown } from "react-icons/io";

const Update = () => {
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
      <div className="9/12 flex flex-col justify-center items-center min-h-screen">
        <div className="border p-20 rounded-[10px] shadow">
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
          <div className="flex justify-between items-ceter border-top">
            <p className="text-[15px] text-[#989898]">Год выпуска</p>
            <select>
              <option value="2024">2024</option>
            </select>
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
