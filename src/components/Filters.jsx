import React from "react";
import Select from "react-select";
import { FaCarAlt, FaGlobe, FaCalendarAlt, FaDollarSign } from "react-icons/fa";

const Section = () => {
  const options = [
    {
      label: "Марка",
      options: [
        { value: "Geely", label: "Geely", icon: <FaCarAlt /> },
        { value: "Monjaro", label: "Monjaro", icon: <FaCarAlt /> },
      ],
    },
    {
      label: "Модель",
      options: [
        { value: "X7", label: "X7", icon: <FaCarAlt /> },
        { value: "Tugella", label: "Tugella", icon: <FaCarAlt /> },
        { value: "Atlas", label: "Atlas", icon: <FaCarAlt /> },
      ],
    },
    {
      label: "Страна производства",
      options: [{ value: "China", label: "China", icon: <FaGlobe /> }],
    },
    {
      label: "Год выпуска",
      options: [
        { value: "2022", label: "2022", icon: <FaCalendarAlt /> },
        { value: "2023", label: "2023", icon: <FaCalendarAlt /> },
      ],
    },
    {
      label: "Цена",
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
        <b className="text-2xl">Подбор авто?</b>
      </div>
      <br />
      <div className="p-4 shadow-slate-500 sm:shadow-md lg:shadow-lg">
        <div className="flex flex-col lg:flex-row gap-4 items-center m-2">
          <div className="bg-gray-100 rounded inline-flex space-x-2 px-3 py-1">
            <button className="text-black px-4 py-2 rounded active:bg-gray-500 active:text-white">
              Bce
            </button>
            <button className="text-black px-4 py-2 rounded active:bg-gray-500 active:text-white">
              Новье
            </button>
            <button className="text-black px-4 py-2 rounded active:bg-gray-500 active:text-white">
              C пробегом
            </button>
          </div>
          <div className="flex gap-2">
            <input type="checkbox" />
            <p>B наличии</p>
          </div>
          <div className="flex gap-2">
            <input type="checkbox" />
            <p>Под заказ</p>
          </div>
        </div>
        <br />
        <div className="flex flex-col lg:flex-row justify-between m-2 gap-4">
          {options.map((item, idx) => (
            <div key={idx} className="w-full lg:w-auto">
              <p>Выберите {item.label}</p>
              <Select
                options={item.options}
                styles={customStyles}
                formatOptionLabel={formatOptionLabel}
                className="bg-gray-100 rounded"
                defaultValue={
                  item.label === "Страна производства" ? item.options[0] : null
                }
              />
            </div>
          ))}
        </div>
        <br />
        <div className="flex gap-4 justify-end items-center">
          <button>Сбросить X</button>
          <button className="bg-blue-500 text-white py-2 px-4 rounded text-sm">
            23 Предложений
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section;
