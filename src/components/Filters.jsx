import React from "react";
import { useLanguage } from "./Context/LanguageContext";
import { IoMdArrowDropdown } from "react-icons/io";

const Section = () => {
  const { language } = useLanguage();

  const translations = {
    ru: {
      select: "Подбор авто?",
      auto: "автомобили",
      new: "Комм-транспорт",
      used: "Мотоциклы",
      available: "В наличии",
      order: "Под заказ",
      reset: "Сбросить",
      offers: "Предложений",
      selection: "Выберите марку",
      model: "Выберите модель",
      country: "Страна",
      year: "Год",
      price: "Цена",
    },
    uzb: {
      select: "Mashina tanlash?",
      auto: "Avtomobil",
      new: "Aloqa-transporti",
      used: "Mototsikllar",
      available: "Mavjud",
      order: "Buyurtma",
      reset: "Bekor qilish",
      offers: "Takliflar",
      selection: "Markani tanlang",
      model: "Modelni tanlang",
      country: "Mamlakat",
      year: "Yil",
      price: "Narx",
    },
    en: {
      select: "Selecting a car?",
      auto: "Cars",
      new: "Comm-transport",
      used: "Motorcycles",
      available: "In Stock",
      order: "On Order",
      reset: "Reset",
      offers: "Offers",
      selection: "Select Brand",
      model: "Select Model",
      country: "Country",
      year: "Year",
      price: "Price",
    },
  };

  return (
    <div className="p-4">
      <div>
        <b className="text-2xl">{translations[language].select}</b>
      </div>
      <br />
      <div className="p-4 shadow-slate-500 sm:shadow-md lg:shadow-lg">
        <div className="flex flex-col lg:flex-row gap-4 items-center m-2">
          <div className="bg-gray-100 rounded-[10px] inline-flex space-x-2 px-2 py-1">
            <button className="px-5 py-2.5 lg:w-[150px] w-[100px] rounded text-[15px] active:bg-[#293843] active:text-white">
              {translations[language].auto}
            </button>
            <button className="text-black px-4 py-2 lg:w-[150px] w-[100px] text-[15px]  rounded active:bg-[#293843] active:text-white">
              {translations[language].new}
            </button>
            <button className="text-black px-4 py-2 lg:w-[150px] w-[100px] text-[15px] rounded active:bg-[#293843] active:text-white">
              {translations[language].used}
            </button>
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
          <div className="flex-grow sm:w-full md:w-full">
            <p className="text-[14px]">{translations[language].selection}</p>
            <div className="relative flex items-center w-full">
              <select className="text-[#5A5A5A] appearance-none bg-[#F4F4F4] rounded-[5px] pl-[18px] pr-[140px] py-[23px] w-full">
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
              <select className="text-[#5A5A5A] appearance-none bg-[#F4F4F4] rounded-[5px] pl-[18px] pr-[156px] py-[23px] lg:w-[250px] w-full">
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
              <select className="text-[#5A5A5A] appearance-none bg-[#F4F4F4] rounded-[5px] pl-[18px] pr-[140px] py-[23px] w-full">
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
            <div className="w-full">
              <select className="text-[#5A5A5A] appearance-none bg-[#F4F4F4] rounded-[5px] pl-[20px] py-[23px] lg:w-[235px] w-full">
                <option value="0 - 2024">0 - 2024</option>
              </select>
            </div>
          </div>

          <div className="w-full">
            <p className="text-[14px]">{translations[language].price}</p>
            <div className="w-full">
              <select className="text-[#5A5A5A] appearance-none bg-[#F4F4F4] rounded-[5px] pl-[10px] pr-[80px] py-[23px] w-full">
                <option value="3 000 000 - 4 000 000">
                  300 000 - 400 000
                </option>
              </select>
            </div>
          </div>
        </div>

        <br />
        <div className="flex gap-4 justify-end items-center">
          <button className="hover:bg-gray-200 py-[8px] px-[16px]">
            {translations[language].reset} X
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-[17px] px-[43px] rounded text-sm">
            23 {translations[language].offers}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section;
