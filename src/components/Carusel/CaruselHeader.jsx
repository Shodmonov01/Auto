import React, { useState } from "react";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";


const CarouselHeader = () => {
  const images = [
    "/car.svg",
    "https://freepngimg.com/save/31679-audi/440x247",
    "https://www.pngitem.com/pimgs/m/310-3109300_download-corvette-car-transparent-background-hd-png-download.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

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

  return (
    <div className="relative bg-slate-200 p-10 m-6 rounded">
      <div className="flex flex-col md:flex-row justify-around items-center">
        <div className="p-4 md:w-1/2">
          <b className="text-4xl">Новый Geely Monjaro!</b>
          <br />
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit.
            Quaerat, ut?
          </p>
          <button className="bg-blue-500 text-white py-2 px-6 mt-4 rounded hover:bg-blue-600">
            Подробнее
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
