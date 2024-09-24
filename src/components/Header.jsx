import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaTelegramPlane, FaInstagram } from "react-icons/fa";
import { TbBellRingingFilled } from "react-icons/tb";
import { MdCall } from "react-icons/md";
import { Link } from "react-router-dom";
import { Dialog } from "@headlessui/react";
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
  const [hasToken, setHasToken] = useState("");
  const [UserData, setUserData] = useState("");

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUserData = localStorage.getItem("userData");
    setHasToken(!!token); // Set to true if token exists, false otherwise
    setUserData(storedUserData ? JSON.parse(storedUserData) : null); // parse the JSON data or set it to null
  }, []);

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
      <header className="bg-[#F6F6F6] w-full px-6">
        <div className="flex flex-wrap items-center p-4">
          <div className="md:hidden">
            {/* <button onClick={toggleMenu}>
              {menuOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
            </button> */}
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex flex-grow">
            <ul className="flex space-x-4 cursor-pointer">
              {Object.keys(translations[language])
                .slice(0, 5)
                .map((key) => (
                  <li
                    key={key}
                    className="p-2 hover:text-blue-600 text-[#434343]"
                  >
                    {translations[language][key]}
                  </li>
                ))}
            </ul>
          </nav>

          <div className="hidden lg:flex space-x-4 lg:space-x-6 me-8">
            <a
              href="https://wa.me/yourwhatsapplink"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="text-[#989898]" size={24} />
            </a>
            <a
              href="https://telegram.me/yourtelegramlink"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegramPlane className="text-[#989898]" size={24} />
            </a>
            <a
              href="https://instagram.com/yourinstagramlink"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-[#989898]" size={24} />
            </a>
          </div>

          {/* Mobile Menu */}
          <Dialog
            open={menuOpen}
            onClose={toggleMenu}
            className="fixed inset-0 z-50"
          >
            <div
              className="fixed inset-0 bg-black opacity-30"
              aria-hidden="true"
            />
            <div className="fixed inset-0 flex justify-center items-center">
              <div className="bg-slate-200 p-4 sm:p-6 w-full max-w-md mx-auto rounded-lg shadow-lg h-full max-h-screen overflow-auto">
                {/* Close Button and Language Selector */}
                <div className="flex justify-between items-center w-full mb-6">
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

                {/* Menu Items */}
                <ul className="flex flex-col items-center space-y-4 mb-4">
                  {Object.keys(translations[language])
                    .slice(0, 5)
                    .map((key) => (
                      <li
                        key={key}
                        className="text-lg p-4 hover:text-blue-600 text-[#989898]"
                      >
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

                {/* Social Media Links */}
                <div className="flex flex-col items-center space-y-4">
                  <div className="flex space-x-4">
                    <a
                      href="https://wa.me/yourwhatsapplink"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaWhatsapp className="text-[#989898]" size={24} />
                    </a>
                    <a
                      href="https://telegram.me/yourtelegramlink"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTelegramPlane className="text-[#989898]" size={24} />
                    </a>
                    <a
                      href="https://instagram.com/yourinstagramlink"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram className="text-[#989898]" size={24} />
                    </a>
                  </div>
                  <div className="flex gap-2 items-center">
                    <MdCall className="text=[#989898]" size={24} />
                    <p className="text-sm">+7(777)777-77-77</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <MdEmail className="text-[#989898]" size={24} />
                    <p className="cursor-pointer text-sm">info@mail.ru</p>
                  </div>
                </div>
              </div>
            </div>
          </Dialog>
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex gap-2 items-center">
              <MdCall className="text-[#989898]" size={24} />
              <p className="text-sm text-[#989898]">+7(777)777-77-77</p>
            </div>
            <div className="flex gap-2 items-center">
              <MdEmail className="text-[#989898]" size={24} />
              <p className="cursor-pointer text-sm">info@mail.ru</p>
            </div>
            <div>
              <select
                style={{ outline: "none" }}
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
        className="flex items-center py-4 px-11 shadow-slate-100 md:justify-between md:space-x-4"
      >
        <div className="flex-grow flex justify-between pr-4">
          <Link to="/" className="flex items-center">
            <div className="flex items-center">
              <b className="text-2xl text-blue-600">You</b>
              <h1 className="text-2xl font-bold">Car</h1>
            </div>
          </Link>
        </div>

        {/* Navigation items hidden on mobile */}
        <ul className="hidden md:flex space-x-8">
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

        {/* Search input and hamburger menu */}
        <div className="relative flex items-center justify-center mx-auto">
          <input
            style={{ maxWidth: "120px" }}
            type="text"
            placeholder={translations[language].searchPlaceholder}
            className="p-[4px] border rounded-lg outline-none sm:p-2 sm:pl-6"
          />
          <button className="absolute left-2 hidden md:block">
            <MdSearch className="text-[#989898]" />
          </button>
          {/* Hamburger menu for mobile view */}
          <div className="md:hidden ml-2 mt-2">
            <button onClick={toggleMenu}>
              {menuOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Hidden on mobile, visible on larger screens */}

        {hasToken ? (
          <div className="flex gap-6 items-center">
            <TbBellRingingFilled className="text-[#989898]" size={24} />
            {UserData ? (
              <>
                <h1>{UserData.name}</h1>
                <p className="bg-[#EEEEEE] rounded-[50%] p-4">
                  {UserData.name ? UserData.name.charAt(0) : "" }
                </p>
              </>
            ) : (
              <h1 className="text-red">Not Found</h1>
            )}
          </div>
        ) : (
          <div className="hidden md:flex items-center space-x-4">
            <TbBellRingingFilled className="text-[#989898]" size={24} />
            <button className="bg-gray-200 py-2 px-4 rounded text-sm">
              <Link to={"/login"}>Войти</Link>
            </button>
            <Link to={"/register"}>
              <button className="bg-blue-500 text-white py-2 px-4 rounded text-sm">
                Регистрация
              </button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
