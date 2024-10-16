import React from "react";
import imageFaimly from "../../src/assets/images/imageFamily.svg";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useLanguage } from "./Context/LanguageContext";

const News = () => {
  const { language } = useLanguage();

  const translations = {
    ru: {
      news: "Новости",
      title: "СРАВНЕНИЕ ЯПОНСКИХ И НЕМЕЦКИХ АВТОМОБИЛЕЙ: ЧТО ЛУЧШЕ?",
      description:
        "С начала весны 2022 года российский автомобильный рынок подвергся...",
      readMore: "Подробнее",
    },
    uzb: {
      news: "Yangiliklar",
      title: "YAPON VA NEMIS MASHINALARINI TAQQOSLASH: QAYSI YAXSHI?",
      description:
        "2022-yil bahoridan boshlab Rossiya avtomobil bozori ta’sir ko‘rsatdi...",
      readMore: "Batafsil",
    },
    en: {
      news: "News",
      title: "COMPARISON OF JAPANESE AND GERMAN CARS: WHICH IS BETTER?",
      description:
        "Since the spring of 2022, the Russian car market has been affected...",
      readMore: "Read More",
    },
  };

  return (
    <div className="p-4">
      <div>
        <b className="text-2xl">{translations[language].news}</b>
      </div>
      <br />
      <div className="flex flex-col gap-4 md:flex-row md:gap-8">
        {[1, 2, 3].map((item, index) => (
          <div key={index} className="flex-1 bg-white shadow-lg rounded-lg p-4">
            <img
              src={imageFaimly}
              alt="imageFamily"
              className="w-full h-auto mb-4 rounded-t-lg"
            />
            <b className="text-xl mb-2 block">{translations[language].title}</b>
            <p className="mb-4">{translations[language].description}</p>
            <div className="flex items-center gap-4">
              <Link className="text-[#293843] hover:text-black" to={"/news"}>
                <u>{translations[language].readMore}</u>
              </Link>
              <FaArrowRightLong />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
