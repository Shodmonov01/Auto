import React, { useState } from "react";
import imageFamily from "../../src/assets/images/imageFamily.svg";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useLanguage } from "./Context/LanguageContext";

const News = () => {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const newsItems = [1, 2, 3]; // Simulating multiple news items

  const handleNext = () => {
    if (currentIndex < newsItems.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="m-2 lg:mx-[72px]">
      <div>
        <b className="text-2xl">{translations[language].news}</b>
      </div>
      <br />
      <div className="relative">
        {/* News card carousel */}
        <div className="relative flex justify-center items-center">
          {/* News item container */}
          <div className="relative flex flex-col gap-4 md:flex-row md:gap-8">
            {newsItems.map((_, index) => (
              <div
                key={index}
                className={`relative flex-1 bg-white shadow-lg rounded-lg p-4 ${
                  index === currentIndex ? "block sm:block lg:block" : "hidden"
                } md:block`} // Always visible on md
              >
                <img
                  src={imageFamily}
                  alt="imageFamily"
                  className="w-full h-auto mb-4 rounded-t-lg"
                />
                <b className="text-xl mb-2 block">
                  {translations[language].title}
                </b>
                <p className="mb-4">{translations[language].description}</p>
                <div className="flex items-center gap-4">
                  <Link
                    className="text-[#293843] hover:text-black"
                    to={"/news"}
                  >
                    <u>{translations[language].readMore}</u>
                  </Link>
                  <FaArrowRightLong />
                </div>
              </div>
            ))}
          </div>

          {/* Left arrow button */}
          {currentIndex > 0 && (
            <button
              onClick={handlePrev}
              className="block lg:hidden absolute left-60 bottom-2 bg-white text-gray hover:bg-gray-200 p-2 rounded-full"
            >
              <FaArrowLeftLong size={24} />
            </button>
          )}

          {/* Right arrow button */}
          {currentIndex < newsItems.length - 1 && (
            <button
              onClick={handleNext}
              className="block lg:hidden absolute right-4 bottom-2 bg-white text-gray hover:bg-gray-200 p-2 rounded-full"
            >
              <FaArrowRightLong size={24} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default News;
