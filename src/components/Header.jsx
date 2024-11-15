import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { TbBellRingingFilled } from "react-icons/tb";
import {
  MdCall,
  MdEmail,
  MdKeyboardArrowRight,
  MdSearch,
  MdClose,
} from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { Dialog } from "@headlessui/react";
import { CiMenuFries } from "react-icons/ci";
import { useLanguage } from "./Context/LanguageContext";
import { FaVk } from "react-icons/fa";
import { useUser } from "./Context/UserContext";
import { socket } from "../socket";

const translations = {
  ru: {
    basic: "Главная",
    katalog: "Каталог",
    about: "O нас",
    news: "Новости",
    contact: "Контакты",
    cars: "Машины",
    commercialTransport: "Коммерческий транспорт",
    motorcycles: "Мотоциклы",
    searchPlaceholder: "Поиск по названию",
    login: "Войти",
    register: "Регистрация",
  },
  uzb: {
    basic: "Uy",
    katalog: "Katalog",
    about: "Biz haqimizda",
    news: "Yangiliklar",
    contact: "Kontaktlar",
    cars: "Avtomobillar",
    commercialTransport: "Tijorat transporti",
    motorcycles: "Mototsikllar",
    searchPlaceholder: "Ism bo'yicha qidirish",
    login: "Tizimga kirish",
    register: "Ro'yxatdan o'tish",
  },
  en: {
    basic: "Home",
    katalog: "Catalog",
    about: "About us",
    cars: "Cars",
    news: "News",
    contact: "Contact",
    commercialTransport: "Commercial Transport",
    motorcycles: "Motorcycles",
    searchPlaceholder: "Search by name",
    login: "Login",
    register: "Register",
  },
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hasToken, setHasToken] = useState(false);
  const [UserData, setUserData] = useState(null);
  const { language, toggleLanguage } = useLanguage();
  const { isLogged, setIsLogged } = useUser();
  const navigate = useNavigate();
  const [sockets, setSockets] = useState(false);

  const handleLanguageChange = (e) => {
    toggleLanguage(e.target.value);
  };
  const token = localStorage.getItem("token");
  const storedUserData = localStorage.getItem("userData");

  useEffect(() => {
    setHasToken(!!token);
    console.log(socket.connected);
    setUserData(storedUserData ? JSON.parse(storedUserData) : null);
    // if (sockets){
    //   console.log('--');
    // }
    // let newSocket = io("https://api.youcarrf.ru/");
    // setSocket(newSocket);

    // if (socket) {
    //   socket.emit("send message", {
    //     senderId: 34,
    //     receiverId: 43,
    //     message: "Hello world",
    //     type: "text",
    //   });
    // }
  }, [storedUserData]);
  const handleClick = () => {
    if (socket) {
      socket.emit("send message", {
        senderId: 47,
        receiverId: 40,
        message: "Hello world",
        type: "text",
      });
    }
  };
  const handClick2 = () => {
    if (socket) {
      socket.emit("join", 47);
    }
  };

  const handleCloseDialog = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  if (token && UserData) {
    setIsLogged(true);
  }
  return (
    <>
      <header className="bg-[#F6F6F6] w-full px-6">
        <div className="flex flex-wrap items-center p-4">
          <nav className="hidden md:flex flex-grow">
            <ul className="flex space-x-4 cursor-pointer">
              <Link to={"/"}>
                <li className="p-2 hover:text-blue-600 text-[#434343]">
                  {translations[language].basic}
                </li>
              </Link>
              <li className="p-2 hover:text-blue-600 text-[#434343]">
                <a href="#aboutus">{translations[language].about}</a>
              </li>
              <button onClick={handleClick}>click</button>
              <button onClick={handClick2}>click2</button>

              <Link to={"/newspage"}>
                <li className="p-2 hover:text-blue-600 text-[#434343]">
                  {translations[language].news}
                </li>
              </Link>
              <Link to={"/contact"}>
                <li className="p-2 hover:text-blue-600 text-[#434343]">
                  {translations[language].contact}
                </li>
              </Link>
            </ul>
          </nav>
          <div className="hidden lg:flex items-center space-x-4 lg:space-x-6 me-8">
            <a
              href="https://telegram.me/yourtelegramlink"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaVk className="text-[#989898] hover:text-black" size={24} />
            </a>
            <a
              href="https://telegram.me/yourtelegramlink"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp
                className="text-[#989898] hover:text-black"
                size={24}
              />
            </a>
            <a
              href="https://instagram.com/yourinstagramlink"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                className="text-[#989898] hover:text-black"
                size={24}
              />
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex gap-2 items-center cursor-pointer group hover:text-black">
              <MdCall
                className="text-[#989898] group-hover:text-black"
                size={24}
              />
              <p className="text-sm text-[#989898] group-hover:text-black">
                +7(777)777-77-77
              </p>
            </div>

            <div className="flex gap-2 cursor-pointer group hover:text-black items-center">
              <MdEmail
                className="text-[#989898] group-hover:text-black"
                size={24}
              />
              <p className="cursor-pointer text-[#989898] group-hover:text-black text-sm">
                info@mail.ru
              </p>
            </div>
            <div>
              <select
                style={{ outline: "none" }}
                className="rounded p-1 text-sm bg-inherit"
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
        <ul className="hidden lg:flex space-x-8">
          <li className="flex items-center gap-2">
            <Link className="hover:text-blue-600 " to={"/about-cars"}>
              {translations[language].cars}
            </Link>
            <MdKeyboardArrowRight className="text-blue-600" />
          </li>
          <li className="flex items-center gap-2">
            <li className="flex items-center gap-2">
              <Link className="hover:text-blue-600 " to={"/commerce-cars"}>
                {translations[language].commercialTransport}
              </Link>
              <MdKeyboardArrowRight className="text-blue-600" />
            </li>
            <Link className="hover:text-blue-600 " to={"/motorcycles"}>
              {translations[language].motorcycles}
            </Link>
            <MdKeyboardArrowRight className="text-blue-600" />
          </li>
        </ul>

        <div className="relative flex items-center justify-center mx-auto">
          <input
            type="text"
            placeholder={translations[language].searchPlaceholder}
            className="p-[4px] border rounded-[3px] bg-[#F6F6F6] outline-none w-[193px] sm:w-[193px] lg:w-[345px] sm:p-2 sm:pl-6"
          />

          <button className="absolute left-2 hidden md:block">
            <MdSearch className="text-[#989898]" />
          </button>
          <div className="md:hidden ml-2 mt-2">
            <button onClick={toggleMenu}>
              {menuOpen ? <MdClose size={24} /> : <CiMenuFries size={24} />}
            </button>
          </div>
        </div>
        {isLogged ? (
          <div className="flex gap-4 md:gap-8 items-center">
            <TbBellRingingFilled
              className="hidden md:block ml-[45px] mr-[92px] cursor-pointer hover:text-black text-[#989898]"
              size={24}
            />
            {UserData ? (
              <>
                <div className="flex flex-col mr-2 md:flex-row items-center">
                  <div className="flex flex-wrap">
                    <h1 className=" hidden md:block mx-4 md:mx-6">
                      {UserData.name}
                    </h1>
                  </div>
                  <Link className="hidden md:block" to={"/profile"}>
                    <p className="rounded-full py-1 md:py-2 px-3 md:px-4 flex items-center justify-center bg-[#EEEEEE]">
                      {UserData.name
                        ? UserData.name.charAt(0).toUpperCase()
                        : ""}
                    </p>
                  </Link>
                </div>
              </>
            ) : (
              <h1 className="text-red">Not Found</h1>
            )}
          </div>
        ) : (
          <div className="hidden md:flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
            <TbBellRingingFilled
              className="text-[#989898] cursor-pointer hover:text-black"
              size={24}
            />
            <Link to={"/login"}>
              <button className="py-[17px] hover:bg-gray-200 px-[43px] rounded text-sm">
                {translations[language].login}
              </button>
            </Link>
            <Link to={"/register"}>
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-[17px] px-[43px] rounded text-sm">
                {translations[language].register}
              </button>
            </Link>
          </div>
        )}
      </div>

      <Dialog
        open={menuOpen}
        onClose={toggleMenu}
        className="fixed inset-0 z-50"
      >
        <div className="fixed inset-0 bg-black opacity-60" aria-hidden="true" />
        <div className="fixed inset-0 flex justify-center items-center">
          <div className="bg-white p-4 sm:p-6 w-full max-w-md mx-auto rounded-lg shadow-lg h-full max-h-screen overflow-auto">
            <div className="flex justify-between items-center w-full mb-6">
              <button onClick={toggleMenu}>
                <MdClose size={24} />
              </button>
            </div>
            {hasToken ? (
              <div>
                {UserData ? (
                  <>
                    <div className="flex items-center justify-between p-4 bg-[#F6F6F6] rounded-[5px]">
                      <div className="flex md:flex-row  items-center">
                        <Link onClick={handleCloseDialog} to={"/profile"}>
                          <p className="rounded-full py-1 md:py-3 px-3 md:px-6 flex items-center justify-center bg-[#EEEEEE]">
                            {UserData.name
                              ? UserData.name.charAt(0).toUpperCase()
                              : ""}
                          </p>
                        </Link>
                        <h1 className="text-xl mx-4 md:mx-6">
                          {UserData.name}
                        </h1>
                      </div>
                      <Link onClick={handleCloseDialog} to={"/profile"}>
                        <div>
                          <MdKeyboardArrowRight
                            size={24}
                            className="text-blue-600 cursor-pointer"
                          />
                        </div>
                      </Link>
                    </div>
                  </>
                ) : (
                  <h1 className="text-red">Not Found</h1>
                )}
                <br />
              </div>
            ) : (
              <div className="flex flex-col items-center space-y-2">
                <Link onClick={handleCloseDialog} to={"/register"}>
                  <button className="w-[334px] bg-blue-500 hover:bg-blue-600 text-white py-[17px] px-[43px] rounded-[3px] text-[13px]">
                    {translations[language].register}
                  </button>
                </Link>
                <Link onClick={handleCloseDialog} to={"/login"}>
                  <button className="w-[334px] bg-[#EEEEEE] hover:bg-gray-300 text-[#ACACAC] py-[17px] px-[43px] rounded-[3px] text-[13px]">
                    {translations[language].login}
                  </button>
                </Link>
                <br />
              </div>
            )}
            <div className="flex items-start justify-between">
              <ul className="flex flex-col items-center space-y-2 ml-2 mb-4">
                <Link onClick={handleCloseDialog} to={"/none"}>
                  <li className="p-2 hover:text-blue-600 text-[14px] text-[#434343]">
                    {translations[language].basic}
                  </li>
                </Link>
                <Link onClick={handleCloseDialog} to={"/none"}>
                  <li className="p-2 hover:text-blue-600 text-[14px] text-[#434343]">
                    {translations[language].about}
                  </li>
                </Link>
                <Link onClick={handleCloseDialog} to={"/news"}>
                  <li className="p-2 hover:text-blue-600 text-[14px] text-[#434343]">
                    {translations[language].news}
                  </li>
                </Link>
                <Link onClick={handleCloseDialog} to={"/contact"}>
                  <li className="p-2 hover:text-blue-600 text-[14px] text-[#434343]">
                    {translations[language].contact}
                  </li>
                </Link>
              </ul>
              <div className="flex items-center space-x-4">
                <select
                  className="rounded p-2 bg:white text-sm"
                  value={language}
                  onChange={handleLanguageChange}
                >
                  <option value="ru">Ru</option>
                  <option value="uzb">Uzb</option>
                  <option value="en">Eng</option>
                </select>
                <TbBellRingingFilled
                  className="text-[#989898] cursor-pointer hover:text-black"
                  size={24}
                />
              </div>
            </div>
            <ul>
              <li className="flex items-center justify-between bg-[#F6F6F6] p-4 m-2">
                <Link
                  onClick={handleCloseDialog}
                  className="hover:text-blue-600 text-[14px]"
                  to={"/about-cars"}
                >
                  {translations[language].cars}
                </Link>
                <MdKeyboardArrowRight className="text-blue-600" />
              </li>
              <li className="flex items-center justify-between bg-[#F6F6F6] p-4 m-2">
                <Link
                  onClick={handleCloseDialog}
                  className="hover:text-blue-600 text-[14px]"
                  to={"/commerce-cars"}
                >
                  {translations[language].commercialTransport}
                </Link>
                <MdKeyboardArrowRight className="text-blue-600" />
              </li>
              <li className="flex items-center justify-between bg-[#F6F6F6] p-4 m-2">
                <Link
                  onClick={handleCloseDialog}
                  className="hover:text-blue-600 text-[14px]"
                  to={"/motorcycles"}
                >
                  {translations[language].motorcycles}
                </Link>
                <MdKeyboardArrowRight className="text-blue-600" />
              </li>
            </ul>
            <div className=" m-2 flex flex-col items-start space-y-4">
              <div className="flex gap-2 mt-2 items-center cursor-pointer">
                <MdCall
                  className="text-[#989898] hover:text-black transition-colors duration-200"
                  size={24}
                />
                <p className="text-sm text-[#989898] hover:text-black">
                  +7(777)777-77-77
                </p>
              </div>
              <div className="flex gap-2 items-cente cursor-pointer">
                <MdEmail
                  className="text-[#989898] hover:text-black transition-colors duration-200"
                  size={24}
                />
                <p className="cursor-pointer text-[#989898] hover:text-black text-sm">
                  info@mail.ru
                </p>
              </div>
              <div className="flex space-x-4 cursor-pointer">
                <a
                  href="https://wa.me/yourwhatsapplink"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaVk
                    className="text-[#989898] hover:text-black transition-colors duration-200"
                    size={24}
                  />
                </a>
                <a
                  href="https://telegram.me/yourtelegramlink"
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
                <FaWhatsapp
                  className="text-[#989898] hover:text-black transition-colors duration-200"
                  size={24}
                />
                <a
                  href="https://instagram.com/yourinstagramlink"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram
                    className="text-[#989898] hover:text-black transition-colors duration-200"
                    size={24}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default Header;
