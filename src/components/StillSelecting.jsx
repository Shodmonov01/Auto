import React from "react";
import car from "../../src/assets/images/car.svg";
import { useLanguage } from "./Context/LanguageContext";

const StillSelecting = () => {
  const { language } = useLanguage();

  const translations = {
    ru: {
      choice: "Не можете определиться с выбором?",
      description: "Оставьте заявку, и наши менеджеры проконсультируют вас!",
      button: "Оставить заявку",
    },
    uzb: {
      choice: "Bir qarorga kelolmayapsizmi?",
      description:
        "Ariza qoldiring, va menejerlarimiz sizga maslahat berishadi!",
      button: "Ariza qoldirish",
    },
    en: {
      choice: "Can't decide on a choice?",
      description: "Leave a request, and our managers will consult you!",
      button: "Leave a request",
    },
  };

  return (
    <div className="p-4">
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8"
        style={{
          background: "linear-gradient(90deg, #3593F3 50.44%, #0C74DF 80.16%)",
          borderRadius: "8px",
        }}
      >
        <div className="flex flex-col justify-center items-center md:items-start">
          <b className="text-2xl text-white mb-2">
            {translations[language].choice}
          </b>
          <p className="text-white mb-4 text-center md:text-left">
            {translations[language].description}
          </p>
          <button className="bg-[#71B2F7] text-white px-6 py-4 rounded">
            {translations[language].button}
          </button>
        </div>
        <div className="flex justify-center items-center">
          <img src={car} alt="car" />
        </div>
      </div>
    </div>
  );
};

export default StillSelecting;
