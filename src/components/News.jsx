import React from "react";
import imageFaimly from "../../src/assets/images/imageFamily.svg";
import { FaArrowRightLong } from "react-icons/fa6";

const News = () => {
  return (
    <div className="p-4">
      <div>
        <b className="text-2xl">Новости</b>
      </div>
      <br />
      <div className="flex flex-col gap-4 md:flex-row md:gap-8">
        {[1, 2, 3].map((item, index) => (
          <div key={index} className="flex-1 bg-white shadow-lg rounded-lg p-4">
            <img
              src={imageFaimly}
              alt="imageFaimly"
              className="w-full h-auto mb-4 rounded-t-lg"
            />
            <b className="text-xl mb-2 block">
              СРАВНЕНИЕ ЯПОНСКИХ И НЕМЕЦКИХ АВТОМОБИЛЕЙ: ЧТО ЛУЧШЕ?
            </b>
            <p className="mb-4">
              C начала весны 2022 года российский автомобильный рынок
              подвергся...
            </p>
            <div className="flex items-center gap-4">
              <a href="#">
                <u>Подробнее</u>
              </a>
              <FaArrowRightLong />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
