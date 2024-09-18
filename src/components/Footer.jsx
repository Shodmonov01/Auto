import React from "react";
import { FaWhatsapp, FaTelegramPlane, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="p-6">
        <hr className="my-6" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
          <div className="flex flex-col items-start">
            <h1 className="text-2xl font-bold mb-4">
              <span className="text-blue-600">You</span>Car
            </h1>
            <div className="flex gap-4 mb-4">
              <FaWhatsapp size={30} />
              <FaTelegramPlane size={30} />
              <FaInstagram size={30} />
            </div>
            <p>© 1-й автоброкер Внесём качественные изменения в Вашу жизнь!</p>
          </div>
          <div className="flex flex-col">
            <b className="mb-2">Компания</b>
            <a href="#" className="text-gray-400 mb-1">
              Каталог
            </a>
            <a href="#" className="text-gray-400 mb-1">
              O нас
            </a>
            <a href="#" className="text-gray-400 mb-1">
              Новости
            </a>
            <a href="#" className="text-gray-400">
              Контакты
            </a>
            <a href="#" className="text-gray-400">
              Избранные
            </a>
          </div>
          <div className="flex flex-col">
            <b className="mb-2">автомобили</b>
            <a href="#" className="text-gray-400 mb-1">
              Из Европы
            </a>
            <a href="#" className="text-gray-400 mb-1">
              Из США
            </a>
            <a href="#" className="text-gray-400 mb-1">
              Из ОАЭ
            </a>
            <a href="#" className="text-gray-400">
              Из Китая
            </a>
            <a href="#" className="text-gray-400">
              Из Кореи
            </a>
          </div>
          <div className="flex flex-col">
            <b className="mb-2">Марки</b>
            <a href="#" className="text-gray-400 mb-1">
              Audi
            </a>
            <a href="#" className="text-gray-400 mb-1">
              Aston Martin
            </a>
            <a href="#" className="text-gray-400 mb-1">
              Acura
            </a>
            <a href="#" className="text-gray-400">
              Alfa Romeo
            </a>
            <a href="#" className="text-gray-400">
              Avatr
            </a>
          </div>
          <div className="flex flex-col">
            <a href="#" className="text-gray-400 mb-1">
              BMW
            </a>
            <a href="#" className="text-gray-400 mb-1">
              Baic
            </a>
            <a href="#" className="text-gray-400 mb-1">
              Byd
            </a>
            <a href="#" className="text-gray-400">
              Chery
            </a>
            <a href="#" className="text-gray-400">
              Bently
            </a>
            <a href="#" className="text-gray-400">
              Dodge
            </a>
          </div>
          <div className="flex flex-col">
            <a href="#" className="text-gray-400 mb-1">
              Chery
            </a>
            <a href="#" className="text-gray-400 mb-1">
              Cadillac
            </a>
            <a href="#" className="text-gray-400 mb-1">
              Changan
            </a>
            <a href="#" className="text-gray-400">
              Chevrolet
            </a>
            <a href="#" className="text-gray-400">
              Citroen
            </a>
            <a href="#" className="text-gray-400">
              Daewoo
            </a>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-around p-4 text-black text-center">
        <p className="text-white">.</p>
        <p>Политика конфиденциальности</p>
        <p>Сделано в UserTech</p>
      </div>
    </>
  );
};

export default Footer;
