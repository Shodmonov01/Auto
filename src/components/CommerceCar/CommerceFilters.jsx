import React, { useState } from "react";
import { useLanguage } from "../Context/LanguageContext";
import { IoMdArrowDropdown } from "react-icons/io";
import { Routes, Route, Link } from "react-router-dom";

const CommerceFilters = () => {
  const { language } = useLanguage();

  const translations = {
    ru: {
      select: "Комм-транспорт",
      auto: "автомобили",
      new: "Комм-транспорт",
      used: "Мотоциклы",
      available: "В наличии",
      order: "Под заказ",
      reset: "Сбросить",
      offers: "Поиск",
      selection: "Выберите марку",
      model: "Выберите модель",
      country: "Страна",
      year: "Год",
      price: "Цена",
    },
    uzb: {
      select: "Comm-transporti",
      auto: "Avtomobil",
      new: "Aloqa-transporti",
      used: "Mototsikllar",
      available: "Mavjud",
      order: "Buyurtma",
      reset: "Bekor qilish",
      offers: "Izlash",
      selection: "Markani tanlang",
      model: "Modelni tanlang",
      country: "Mamlakat",
      year: "Yil",
      price: "Narx",
    },
    en: {
      select: "Comm-transport",
      auto: "Cars",
      new: "Comm-transport",
      used: "Motorcycles",
      available: "In Stock",
      order: "On Order",
      reset: "Reset",
      offers: "Search",
      selection: "Select Brand",
      model: "Select Model",
      country: "Country",
      year: "Year",
      price: "Price",
    },
  };

  return (
    <>
      <div className="mx-2 py-6 lg:mx-[72px] lg:py-6">
        <div>
          <b className="text-2xl">{translations[language].select}</b>
        </div>
        <br />
        <div className="p-4 shadow-slate-500 sm:shadow-md lg:shadow-lg">
          <div className="flex flex-col lg:flex-row gap-4 items-center m-2">
            <div className="bg-gray-100 rounded-[10px] flex items-center space-x-4 pr-2">
              <Link to="/about-cars">
                <button className="px-4 py-2 lg:w-[150px] w-[100px] rounded text-[15px] active:text-white active:bg-[#293843]">
                  {translations[language].auto}
                </button>
              </Link>
              <Link to="/commerce-cars">
                <button
                  className={
                    "px-4 py-2 lg:w-[150px] w-[100px] rounded text-[15px] active:text-white active:bg-[#293843]"
                  }
                >
                  {translations[language].new}
                </button>
              </Link>
              <Link to="/motorcycles">
                <button
                  className={
                    "px-4 py-2 lg:w-[150px] w-[100px] rounded text-[15px] active:text-white active:bg-[#293843]"
                  }
                >
                  {translations[language].used}
                </button>
              </Link>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" />
              <p>{translations[language].available}</p>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" />
              <p>{translations[language].order}</p>
            </div>
          </div>
          <br />
          <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 gap-4">
            <div className="w-full">
              <p className="text-[14px]">{translations[language].selection}</p>
              <div className="relative flex items-center w-full">
                <select className="text-[#5A5A5A] appearance-none bg-[#F4F4F4] rounded-[5px] px-[18px] py-[23px] w-full">
                  <option value="Geely">Geely</option>
                  <option value="Monjaro">Monjaro</option>
                </select>
                <IoMdArrowDropdown
                  size={24}
                  className="text-black absolute right-[20px] pointer-events-none"
                />
              </div>
            </div>

            <div className="w-full">
              <p className="text-[14px]">{translations[language].model}</p>
              <div className="relative flex items-center w-full">
                <select className="text-[#5A5A5A] appearance-none bg-[#F4F4F4] rounded-[5px] px-[18px] py-[23px] w-full">
                  <option value="Monjaro">Monjaro</option>
                  <option value="Monjaro">Monjaro</option>
                </select>
                <IoMdArrowDropdown
                  size={24}
                  className="text-black absolute right-[20px] pointer-events-none"
                />
              </div>
            </div>

            <div className="w-full">
              <p className="text-[14px]">{translations[language].country}</p>
              <div className="relative flex items-center w-full">
                <select className="text-[#5A5A5A] appearance-none bg-[#F4F4F4] rounded-[5px] px-[18px]  py-[23px] w-full">
                  <option value="China">China</option>
                  <option value="Monjaro">Monjaro</option>
                </select>
                <IoMdArrowDropdown
                  size={24}
                  className="text-black absolute right-[20px] pointer-events-none"
                />
              </div>
            </div>

            <div className="w-full">
              <p className="text-[14px]">{translations[language].year}</p>
              <div className="relative flex items-center w-full">
                <select className="text-[#5A5A5A] appearance-none bg-[#F4F4F4] rounded-[5px] px-[18px] py-[23px] w-full">
                  <option value="0 - 2024">0 - 2024</option>
                </select>
              </div>
            </div>

            <div className="w-full">
              <p className="text-[14px]">{translations[language].price}</p>
              <div className="relative flex items-center w-full">
                <select className="text-[#5A5A5A] appearance-none bg-[#F4F4F4] rounded-[5px] px-[18px] py-[23px] w-full">
                  <option value="3 000 000 - 4 000 000">
                    3 000 000 - 4 000 000
                  </option>
                </select>
              </div>
            </div>
          </div>

          <br />
          <div className="flex gap-4 justify-end items-center">
            <button className="hover:bg-gray-200 py-[8px] px-[16px]">
              {translations[language].reset} x
            </button>
            <button className="bg-[#989898] hover:bg-gray-600 text-white py-[17px] px-[43px] rounded text-[14px]">
              {translations[language].offers}
            </button>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="" element />
        <Route path="" element />
        <Route path="" element />
      </Routes>
    </>
  );
};

export default CommerceFilters;
