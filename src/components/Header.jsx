import React, { useState } from "react";
import { FaWhatsapp, FaTelegramPlane, FaInstagram } from "react-icons/fa";
import { TbBellRingingFilled } from "react-icons/tb";
import { MdCall } from "react-icons/md";

import {
  MdEmail,
  MdKeyboardArrowRight,
  MdSearch,
  MdMenu,
  MdClose,
} from "react-icons/md";

const Header = () => {
  const [language, setLanguage] = useState("ru");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const translations = {
    ru: {
      home: "Главная",
      catalog: "Каталог",
      about: "O нас",
      news: "Новости",
      contacts: "Контакты",
      searchPlaceholder: "Поиск по названию",
      personName: "Хамзат Хусейнович Арсланалиев",
      cars: "Автомобили",
      commercialTransport: "Коммерческий транспорт",
      motorcycles: "Мотоциклы",
    },
    uzb: {
      home: "Bosh sahifa",
      catalog: "Katalog",
      about: "Biz haqimizda",
      news: "Yangiliklar",
      contacts: "Aloqalar",
      searchPlaceholder: "Nomi boyicha qidirish",
      personName: "Hamzat Husenovich Arslanaliev",
      cars: "Avtomobillar",
      commercialTransport: "Tijorat transporti",
      motorcycles: "Mototsikllar",
    },
    en: {
      home: "Home",
      catalog: "Catalog",
      about: "About Us",
      news: "News",
      contacts: "Contacts",
      searchPlaceholder: "Search by name",
      personName: "Hamzat Husenovich Arslanaliev",
      cars: "Cars",
      commercialTransport: "Commercial Transport",
      motorcycles: "Motorcycles",
    },
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="bg-slate-200 w-full px-6">
        <div className="flex flex-wrap justify-between items-center p-4">
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {menuOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
            </button>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex flex-grow">
            <ul className="flex space-x-4 cursor-pointer">
              {Object.keys(translations[language])
                .slice(0, 5)
                .map((key) => (
                  <li key={key} className="p-2 hover:text-blue-600">
                    {translations[language][key]}
                  </li>
                ))}
            </ul>
          </nav>

          <div className="flex space-x-4 md:space-x-6 me-8">
            <a
              href="https://wa.me/yourwhatsapplink"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={24} />
            </a>
            <a
              href="https://telegram.me/yourtelegramlink"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegramPlane size={24} />
            </a>
            <a
              href="https://instagram.com/yourinstagramlink"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={24} />
            </a>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="fixed inset-0 bg-slate-200 z-50 flex flex-col items-center py-16 space-y-4">
              <div className="flex justify-between items-center w-full px-4">
                <button onClick={toggleMenu}>
                  <MdClose size={24} />
                </button>
                <select
                  className="border rounded p-1 text-sm"
                  value={language}
                  onChange={handleLanguageChange}
                >
                  <option value="ru">Rus</option>
                  <option value="uzb">Uzb</option>
                  <option value="en">Eng</option>
                </select>
              </div>
              <ul className="flex flex-col items-center space-y-4">
                {Object.keys(translations[language])
                  .slice(0, 5)
                  .map((key) => (
                    <li key={key} className="text-lg p-4 hover:text-blue-600">
                      {translations[language][key]}
                    </li>
                  ))}
                {/* Added menu items */}
                <li className="text-lg p-4 hover:text-blue-600">
                  {translations[language].cars}
                </li>
                <li className="text-lg p-4 hover:text-blue-600">
                  {translations[language].commercialTransport}
                </li>
              </ul>
              <div className="flex flex-col items-center space-y-4">
                <div className="flex space-x-4">
                  <a
                    href="https://wa.me/yourwhatsapplink"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp size={24} />
                  </a>
                  <a
                    href="https://telegram.me/yourtelegramlink"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTelegramPlane size={24} />
                  </a>
                  <a
                    href="https://instagram.com/yourinstagramlink"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram size={24} />
                  </a>
                </div>
                <div className="flex gap-2 items-center">
                  <MdCall size={24} />
                  <p className="text-sm">+7(777)777-77-77</p>
                </div>
                <div className="flex gap-2 items-center">
                  <MdEmail size={24} />
                  <p className="cursor-pointer text-sm">info@mail.ru</p>
                </div>
              </div>
            </div>
          )}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex gap-2 items-center">
              <MdCall size={24} />
              <p className="text-sm">+7(777)777-77-77</p>
            </div>
            <div className="flex gap-2 items-center">
              <MdEmail size={24} />
              <p className="cursor-pointer text-sm">info@mail.ru</p>
            </div>
            <div>
              <select
              style={{outline:"none"}}
                className="border rounded p-1 text-sm bg-inherit"
                value={language}
                onChange={handleLanguageChange}
              >
                <option value="ru">Rus</option>
                <option value="uzb">Uzb</option>
                <option value="en">Eng</option>
              </select>
            </div>
          </div>
        </div>
      </header>
      <div
        style={{ boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}
        className="flex flex-wrap items-center py-4 px-11 md:justify-between md:space-x-4 shadow-slate-100"
      >
        <div className="flex-grow">
          <h1 className="text-2xl font-bold">
            <a href="#" className="text-blue-600">
              You
            </a>
            Car
          </h1>
        </div>
        <ul className="hidden md:flex space-x-4">
          <li className="flex items-center gap-2">
            <a href="#">{translations[language].cars}</a>
            <MdKeyboardArrowRight className="text-blue-600" />
          </li>
          <li className="flex items-center gap-2">
            <a href="#">{translations[language].commercialTransport}</a>
            <MdKeyboardArrowRight className="text-blue-600" />
          </li>
          <li className="flex items-center gap-2">
            <a href="#">{translations[language].motorcycles}</a>
            <MdKeyboardArrowRight className="text-blue-600" />
          </li>
        </ul>
        <div className="relative flex items-center ml-4">
          <input
            type="text"
            placeholder={translations[language].searchPlaceholder}
            className="p-2 pl-10 border rounded-lg outline-none text-sm"
          />
          <button className="absolute left-2">
            <MdSearch className="text-blue-600" />
          </button>
        </div>
        <div className="hidden md:block">
          <TbBellRingingFilled size={24} />
        </div>
        <div className="hidden md:block">
          <button className="bg-gray-200 py-2 px-4 rounded text-sm">
            Войти
          </button>
        </div>
        <div className="hidden md:block">
          <button className="bg-blue-500 text-white py-2 px-4 rounded text-sm">
            Регистрация
          </button>
        </div>
      </div>
      <br />
    </>
  );
};

export default Header;
