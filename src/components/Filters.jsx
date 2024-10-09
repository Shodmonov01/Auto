import React from "react";
import Select from "react-select";
import { FaCarAlt, FaGlobe, FaCalendarAlt, FaDollarSign } from "react-icons/fa";
import { useLanguage } from "./Context/LanguageContext";

const Section = () => {
  const { language } = useLanguage();
  const options = [
    {
      label: {
        ru: "Марка",
        uzb: "Marka",
        en: "Brand",
      },
      options: [
        { value: "Geely", label: "Geely", icon: <FaCarAlt /> },
        { value: "Monjaro", label: "Monjaro", icon: <FaCarAlt /> },
      ],
    },
    {
      label: {
        ru: "Модель",
        uzb: "Model",
        en: "Model",
      },
      options: [
        { value: "X7", label: "X7", icon: <FaCarAlt /> },
        { value: "Tugella", label: "Tugella", icon: <FaCarAlt /> },
        { value: "Atlas", label: "Atlas", icon: <FaCarAlt /> },
      ],
    },
    {
      label: {
        ru: "Страна производства",
        uzb: "Ishlab chiqarilgan mamlakat",
        en: "Country of Manufacture",
      },
      options: [{ value: "China", label: "China", icon: <FaGlobe /> }],
    },
    {
      label: {
        ru: "Год выпуска",
        uzb: "Ishlab chiqarilgan yili",
        en: "Year of Manufacture",
      },
      options: [
        { value: "2022", label: "2022", icon: <FaCalendarAlt /> },
        { value: "2023", label: "2023", icon: <FaCalendarAlt /> },
      ],
    },
    {
      label: {
        ru: "Цена",
        uzb: "Narx",
        en: "Price",
      },
      options: [
        { value: "< $20,000", label: "< $20,000", icon: <FaDollarSign /> },
        {
          value: "$20,000 - $30,000",
          label: "$20,000 - $30,000",
          icon: <FaDollarSign />,
        },
        { value: "> $30,000", label: "> $30,000", icon: <FaDollarSign /> },
      ],
    },
  ];

  const translations = {
    ru: {
      select: "Подбор авто?",
      all: "Bce",
      new: "Новье",
      used: "C пробегом",
      available: "B наличии",
      order: "Под заказ",
      reset: "Сбросить",
      offers: "Предложений",
      selection: "Выберите",
    },
    uzb: {
      select: "Mashina tanlash?",
      all: "Hammasi",
      new: "Yangi",
      used: "Ishlatilgan",
      available: "Mavjud",
      order: "Buyurtma",
      reset: "Bekor qilish",
      offers: "Takliflar",
      selection: "Tanlash",
    },
    en: {
      select: "Selecting a car?",
      all: "All",
      new: "New",
      used: "Used",
      available: "In Stock",
      order: "On Order",
      reset: "Reset",
      offers: "Offers",
      selection: "Selection",
    },
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "#f3f4f6",
      padding: "6px",
      borderRadius: "5px",
    }),
    option: (provided, { data }) => ({
      ...provided,
      display: "flex",
      alignItems: "center",
      gap: "10px",
      padding: "8px 12px",
    }),
    singleValue: (provided, { data }) => ({
      ...provided,
      display: "flex",
      alignItems: "center",
      gap: "10px",
    }),
  };

  const formatOptionLabel = ({ label, icon }) => (
    <div style={{ display: "flex", alignItems: "center" }}>
      {icon}
      <span style={{ marginLeft: 8 }}>{label}</span>
    </div>
  );

  return (
    <div className="p-4">
      <div>
        <b className="text-2xl">{translations[language].select}</b>
      </div>
      <br />
      <div className="p-4 shadow-slate-500 sm:shadow-md lg:shadow-lg">
        <div className="flex flex-col lg:flex-row gap-4 items-center m-2">
          <div className="bg-gray-100 rounded inline-flex space-x-2 px-3 py-1">
            <button className="text-white px-4 py-2 rounded bg-[#293843] active:text-white">
              {translations[language].all}
            </button>
            <button className="text-black px-4 py-2 rounded active:bg-[#293843] active:text-white">
              {translations[language].new}
            </button>
            <button className="text-black px-4 py-2 rounded active:bg-[#293843] active:text-white">
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
        <div className="flex flex-col lg:flex-row justify-between m-2 gap-4">
          {options.map((item, idx) => (
            <div key={idx} className="w-full lg:w-auto">
              <p>{`${translations[language].selection} ${item.label[language]}`}</p>
              <Select
                options={item.options}
                styles={customStyles}
                formatOptionLabel={formatOptionLabel}
                className="bg-gray-100 rounded"
                defaultValue={
                  item.label[language] === "Страна производства"
                    ? item.options[0]
                    : null
                }
              />
            </div>
          ))}
        </div>
        <br />
        <div className="flex gap-4 justify-end items-center">
          <button>{translations[language].reset} X</button>
          <button className="bg-blue-500 text-white py-2 px-4 rounded text-sm">
            23 {translations[language].offers}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section;
