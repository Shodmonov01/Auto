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
import Update from "./Update";
import Setting from "./Setting";
import { useNavigate } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-6 min-h-screen bg-gray-100">
        {/* Sidebar */}
        <aside className="col-span-1 lg:col-span-2 bg-white rounded-lg shadow-lg p-6 m-4">
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
              <p className="text-sm text-gray-600">Reyting: 5.0</p>
            </div>
          </div>
          <br />
          <hr />
          <div className="mt-6">
            <div className="flex gap-4 items-center">
              <p className="text-sm text-gray-700">Email:</p>
              <p className="text-[#2684E5] cursor-pointer text-sm hover:underline">
                {userData?.email}
              </p>
            </div>
          </div>
          <div className="mt-6">
            <div className="flex gap-4 items-center">
              <p className="text-sm text-gray-700">Тариф:</p>
              <p className="text-[#2684E5] cursor-pointer text-sm hover:underline">
                {userData?.email}
              </p>
            </div>
          </div>
          <div className="my-6">
            <Link to="/profile/favorite">
              <div className="flex items-center gap-4 rounded justify-start hover:bg-[#F3F5FC] p-4 my-2 cursor-pointer">
                <CiStar />
                <button>Избранное</button>
              </div>
            </Link>
            <Link to="message">
              <div className="flex items-center gap-4 rounded justify-start hover:bg-[#F3F5FC] p-4 my-2">
                <AiOutlineMessage />
                <button>Сообщения</button>
              </div>
            </Link>
            <div className="relative">
              <div
                onClick={toggleDropdown}
                className="flex items-center gap-4 rounded justify-start hover:bg-[#F3F5FC] p-4 my-2 cursor-pointer"
              >
                <BsLayoutSidebarReverse />
                <button>Разместить объявление</button>
                {isDropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </div>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-full bg-white shadow-md rounded z-50">
                  <Link to="/update" className="block p-4 hover:bg-gray-200">
                    Обновить объявление
                  </Link>
                  <Link
                    to="/other-route"
                    className="block p-4 hover:bg-gray-200"
                  >
                    Другое действие
                  </Link>
                </div>
              )}
            </div>
            <Link to="rate">
              <div className="flex items-center gap-4 rounded justify-start hover:bg-[#F3F5FC] p-4 my-2">
                <BsLightning />
                <button>Тариф</button>
              </div>
            </Link>
            <Link to="setting">
              <div className="flex items-center gap-4 rounded justify-start hover:bg-[#F3F5FC] p-4 my-2">
                <AiOutlineSetting />
                <button>Настройки аккаунта</button>
              </div>
            </Link>
          </div>
          <div className="flex justify-center items-end">
            <button className="w-full py-4 bg-[#F6F6F6]" onClick={logout}>
              Выйти
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="col-span-1 sm:col-span-3 lg:col-span-4 bg-white rounded-lg shadow-lg p-8 m-4">
          <Routes>
            <Route
              path="favorite"
              element={
                <>
                  <PageTitle title="favorite" />
                  <Favorite />
                </>
              }
            />
            <Route
              path="message"
              element={
                <>
                  <PageTitle title="message" />
                  <Message />
                </>
              }
            />
            {/* <Route
              path="update"
              element={
                <>
                  <PageTitle title="update" />
                  <Update />
                </>
              }
            /> */}
            <Route
              path="rate"
              element={
                <>
                  <PageTitle title="rate" />
                  <Rate />
                </>
              }
            />
            <Route
              path="setting"
              element={
                <>
                  <PageTitle title="setting" />
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
