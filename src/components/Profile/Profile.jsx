import React, { useEffect, useState } from "react";
import { CiStar } from "react-icons/ci";
import { AiOutlineMessage } from "react-icons/ai";
import { BsLayoutSidebarReverse } from "react-icons/bs";
import { BsLightning } from "react-icons/bs";
import { AiOutlineSetting } from "react-icons/ai";
import { Routes, Route, Link } from "react-router-dom";
import Favorite from "./Favorite";
import PageTitle from "../PageTitle";
import Message from "./Message";
import Rate from "./Rate";
import Setting from "./Setting";
import { useNavigate } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useLanguage } from "../Context/LanguageContext";

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { language } = useLanguage();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
    localStorage.removeItem("resetToken");
    navigate("/");
    window.location.reload();
  };

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    setUserData(storedUserData ? JSON.parse(storedUserData) : null);
  }, []);
  
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const translations = {
    ru: {
      rate: "Рейтинг",
      email: "Электронная почта:",
      tariff: "Тариф:",
      favorite: "Избранное",
      message: "Сообщения",
      postAd: "Разместить объявление",
      updateAd: "Обновить объявление",
      otherAction: "Другое действие",
      tariffText: "Тариф",
      accountSettings: "Настройки аккаунта",
      logout: "Выйти",
    },
    uzb: {
      rate: "Reyting",
      email: "Elektron pochta:",
      tariff: "Tarif:",
      favorite: "Sevimli",
      message: "Xabarlar",
      postAd: "E'lon joylashtirish",
      updateAd: "E'lonni yangilash",
      otherAction: "Boshqa amal",
      tariffText: "Tarif",
      accountSettings: "Hisob sozlamalari",
      logout: "Chiqish",
    },
    en: {
      rate: "Rating",
      email: "Email:",
      tariff: "Tariff:",
      favorite: "Favorite",
      message: "Messages",
      postAd: "Post Ad",
      updateAd: "Update Ad",
      otherAction: "Other Action",
      tariffText: "Tariff",
      accountSettings: "Account Settings",
      logout: "Logout",
    },
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-6 gap-6 min-h-screen bg-gray-100">
        {/* Sidebar */}
        <aside className="col-span-1 sm:col-span-1 lg:col-span-2 bg-white rounded-lg shadow-lg p-6 my-4">
          <div className="flex gap-4 items-center">
            <p className="rounded-full py-3 px-6 bg-gray-200 text-lg font-bold text-gray-800">
              {userData && userData.name
                ? userData.name.charAt(0).toUpperCase()
                : ""}
            </p>
            <div>
              <p className="text-xl font-semibold text-gray-900">
                {userData?.name}
              </p>
              <p className="text-sm text-gray-600">
                {translations[language].rate}: 5.0
              </p>
            </div>
          </div>
          <br />
          <hr />
          <div className="mt-6">
            <div className="flex gap-4 items-center">
              <p className="text-sm text-gray-700">
                {translations[language].email}
              </p>
              <p className="text-[#2684E5] cursor-pointer text-sm hover:underline">
                {userData?.email}
              </p>
            </div>
          </div>
          <div className="mt-6">
            <div className="flex gap-4 items-center">
              <p className="text-sm text-gray-700">
                {translations[language].tariff}
              </p>
              <p className="text-[#2684E5] cursor-pointer text-sm hover:underline">
                {userData?.email}
              </p>
            </div>
          </div>
          <div className="my-6">
            <Link to="/profile/favorite">
              <div className="flex items-center gap-4 rounded justify-start hover:bg-[#F3F5FC] p-4 my-2 cursor-pointer">
                <CiStar />
                <button>{translations[language].favorite}</button>
              </div>
            </Link>
            <Link to="message">
              <div className="flex items-center gap-4 rounded justify-start hover:bg-[#F3F5FC] p-4 my-2">
                <AiOutlineMessage />
                <button>{translations[language].message}</button>
              </div>
            </Link>
            <div className="relative">
              <div
                onClick={toggleDropdown}
                className="flex items-center gap-4 rounded justify-start hover:bg-[#F3F5FC] p-4 my-2 cursor-pointer"
              >
                <BsLayoutSidebarReverse />
                <button>{translations[language].postAd}</button>
                {isDropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </div>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-full bg-white shadow-md rounded z-50">
                  <Link to="/update" className="block p-4 hover:bg-gray-200">
                    {translations[language].updateAd}
                  </Link>
                  <Link to="myupdate/*" className="block p-4 hover:bg-gray-200">
                    {translations[language].otherAction}
                  </Link>
                </div>
              )}
            </div>
            <Link to="rate">
              <div className="flex items-center gap-4 rounded justify-start hover:bg-[#F3F5FC] p-4 my-2">
                <BsLightning />
                <button>{translations[language].tariffText}</button>
              </div>
            </Link>
            <Link to="setting">
              <div className="flex items-center gap-4 rounded justify-start hover:bg-[#F3F5FC] p-4 my-2">
                <AiOutlineSetting />
                <button>{translations[language].accountSettings}</button>
              </div>
            </Link>
          </div>
          <div className="flex justify-center items-end">
            <button className="w-full py-4 bg-[#F6F6F6]" onClick={logout}>
              {translations[language].logout}
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="col-span-1 sm:col-span-1 lg:col-span-4 bg-white rounded-lg shadow-lg p-8 my-4">
          <Routes>
            <Route
              path="favorite"
              element={
                <>
                  <PageTitle title={translations[language].favorite} />
                  <Favorite />
                </>
              }
            />
            <Route
              path="message"
              element={
                <>
                  <PageTitle title={translations[language].message} />
                  <Message />
                </>
              }
            />
            <Route
              path="rate"
              element={
                <>
                  <PageTitle title={translations[language].rate} />
                  <Rate />
                </>
              }
            />
            <Route
              path="setting"
              element={
                <>
                  <PageTitle title={translations[language].setting} />
                  <Setting />
                </>
              }
            />
          </Routes>
        </main>
      </div>
    </>
  );
};

export default Profile;
