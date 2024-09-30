import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaTelegramPlane, FaInstagram } from "react-icons/fa";
import { TbBellRingingFilled } from "react-icons/tb";
import {
  MdCall,
  MdEmail,
  MdKeyboardArrowRight,
  MdSearch,
  MdMenu,
  MdClose,
} from "react-icons/md";
import { Link } from "react-router-dom";
import { Dialog } from "@headlessui/react";

const translations = {
  ru: {
    cars: "Машины",
    commercialTransport: "Коммерческий транспорт",
    motorcycles: "Мотоциклы",
    searchPlaceholder: "Поиск...",
  },
  uzb: {
    cars: "Avtomobillar",
    commercialTransport: "Tijorat transporti",
    motorcycles: "Mototsikllar",
    searchPlaceholder: "Qidiruv...",
  },
  en: {
    cars: "Cars",
    commercialTransport: "Commercial Transport",
    motorcycles: "Motorcycles",
    searchPlaceholder: "Search...",
  },
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hasToken, setHasToken] = useState(false);
  const [UserData, setUserData] = useState(null);
  const [language, setLanguage] = useState("ru");

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUserData = localStorage.getItem("userData");
    setHasToken(!!token);
    setUserData(storedUserData ? JSON.parse(storedUserData) : null);
  }, []);

  // const clearStorage = () => {
  //   localStorage.removeItem("token");
  //   localStorage.removeItem("userData");
  //   localStorage.removeItem("resetToken");
  // };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="bg-[#F6F6F6] w-full px-6">
        <div className="flex flex-wrap items-center p-4">
          <nav className="hidden md:flex flex-grow">
            <ul className="flex space-x-4 cursor-pointer">
              <Link to={"/none"}>
                <li className="p-2 hover:text-blue-600 text-[#434343]">
                  Главная
                </li>
              </Link>
              <Link to={"/katalog"}>
                <li className="p-2 hover:text-blue-600 text-[#434343]">
                  Каталог
                </li>
              </Link>
              <Link to={"/none"}>
                <li className="p-2 hover:text-blue-600 text-[#434343]">
                  O нас
                </li>
              </Link>
              <Link to={"/news"}>
                <li className="p-2 hover:text-blue-600 text-[#434343]">
                  Новости
                </li>
              </Link>
              <Link to={"/contact"}>
                <li className="p-2 hover:text-blue-600 text-[#434343]">
                  Контакты
                </li>
              </Link>
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
                <ul className="flex flex-col items-center space-y-4 mb-4">
                  <li className="text-lg p-4 hover:text-blue-600">Главная</li>
                  <li className="text-lg p-4 hover:text-blue-600">Каталог</li>
                  <li className="text-lg p-4 hover:text-blue-600">O нас</li>
                </ul>
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
                    <MdCall className="text-[#989898]" size={24} />
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
        <ul className="hidden md:flex space-x-8">
          <li className="flex items-center gap-2">
            <Link to={"/about-cars"}>{translations[language].cars}</Link>
            <MdKeyboardArrowRight className="text-blue-600" />
          </li>
          <li className="flex items-center gap-2">
            <li className="flex items-center gap-2">
              <Link to={"/commerce-cars"}>
                {translations[language].commercialTransport}
              </Link>
              <MdKeyboardArrowRight className="text-blue-600" />
            </li>
            <Link to={"/motorcycles"}>
              {translations[language].motorcycles}
            </Link>
            <MdKeyboardArrowRight className="text-blue-600" />
          </li>
        </ul>
        <div className="relative flex items-center justify-center mx-auto">
          <input
            style={{ maxWidth: "250px" }}
            type="text"
            placeholder={translations[language].searchPlaceholder}
            className="p-[4px] border rounded-lg outline-none sm:p-2 sm:pl-6"
          />
          <button className="absolute left-2 hidden md:block">
            <MdSearch className="text-[#989898]" />
          </button>
          <div className="md:hidden ml-2 mt-2">
            <button onClick={toggleMenu}>
              {menuOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
            </button>
          </div>
        </div>
        {hasToken ? (
          <div className="flex gap-6 items-center">
            <TbBellRingingFilled className="text-[#989898]" size={24} />
            {UserData ? (
              <>
                <h1 className="mx-6">{UserData.name}</h1>
                <Link to={"/profile"}>
                  <p className="rounded-full py-2 px-4 flex items-center justify-center bg-[#EEEEEE]">
                    {UserData.name ? UserData.name.charAt(0).toUpperCase() : ""}
                  </p>
                </Link>
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
