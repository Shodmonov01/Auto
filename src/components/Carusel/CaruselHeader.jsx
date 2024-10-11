import React, { useState } from "react";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { useLanguage } from "../Context/LanguageContext";

const CarouselHeader = () => {
  const images = [
    "/car.svg",
    "https://freepngimg.com/save/31679-audi/440x247",
    "https://www.pngitem.com/pimgs/m/310-3109300_download-corvette-car-transparent-background-hd-png-download.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const { language } = useLanguage();

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };
 const translations = {
   ru: {
     geely: "Новый Geely Monjaro!",
     description:
       "Кроссовер Monjaro - премиальная модель Geely по уровню дизайна, материалов и технологий.",
     details: "Подробнее",
   },
   uzb: {
     geely: "Yangi Geely Monjaro",
     description:
       "Monjaro krossoveri - Geely'ning dizayn, materiallar va texnologiyalar darajasida premium modeli.",
     details: "Batafsil",
   },
   en: {
     geely: "New Geely Monjaro",
     description:
       "The Monjaro crossover is Geely's premium model in terms of design, materials, and technology.",
     details: "Learn more",
   },
 };


  return (
    <div className="relative bg-slate-200 p-10 m-6 rounded">
      <div className="flex flex-col md:flex-row justify-around items-center">
        <div className="p-4 md:w-1/2">
          <b className="text-4xl">{translations[language].geely}</b>
          <br />
          <p className="mt-4">{translations[language].description}</p>

          <button className="bg-[#2684E5] text-white py-[17px] px-[43px] mt-4 rounded-[3px]">
            {translations[language].details}
          </button>
        </div>
        <div className="relative w-full md:w-1/2 h-64 overflow-hidden">
          <img
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            className="absolute rounded inset-0 object-cover transition-opacity duration-1000 ease-in-out opacity-100"
          />
        </div>
      </div>
      <div className="absolute bottom-4 right-4 md:right-10 md:bottom-10 flex items-center space-x-4">
        <div className="flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-blue-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
        <button
          onClick={prevSlide}
          className=" bg-white text-gray p-2 rounded-full"
        >
          <FaLongArrowAltLeft />
        </button>
        <button
          onClick={nextSlide}
          className="bg-white text-gray p-2 rounded-full"
        >
          <FaLongArrowAltRight />
        </button>
      </div>
    </div>
  );
};

export default CarouselHeader;
