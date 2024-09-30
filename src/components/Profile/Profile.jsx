import React, { useEffect, useState } from "react";
import { CiStar } from "react-icons/ci";
import { AiOutlineMessage } from "react-icons/ai";
import { BsLayoutSidebarReverse } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { BsLightning } from "react-icons/bs";
import { AiOutlineSetting } from "react-icons/ai";
import { Routes, Route, Link } from "react-router-dom";
import Favorite from "./Favorite";
import PageTitle from "../PageTitle";
import Message from "./Message";
import Rate from "./Rate";
import Update from "./Update";
import Setting from "./Setting";

const Profile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    setUserData(storedUserData ? JSON.parse(storedUserData) : null);
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-6 h-screen bg-gray-100">
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
          <div className="m-4">
            <Link to="/profile/favorite">
              <div className="flex items-center gap-4 rounded justify-start hover:bg-[#F3F5FC] p-2 my-2 cursor-pointer">
                <CiStar />
                <button>Избранное</button>
              </div>
            </Link>
            <Link to="/profile/messages">
              <div className="flex items-center gap-4 rounded justify-start hover:bg-[#F3F5FC] p-2 my-2">
                <AiOutlineMessage />
                <button>Сообщения</button>
              </div>
            </Link>
            <Link to="/profile/update">
              <div className="flex items-center gap-4 rounded justify-start hover:bg-[#F3F5FC] p-2 my-2">
                <BsLayoutSidebarReverse />
                <button>Разместить объявление</button>
                <IoIosArrowDown />
              </div>
            </Link>
            <Link to="/profile/rate">
              <div className="flex items-center gap-4 rounded justify-start hover:bg-[#F3F5FC] p-2 my-2">
                <BsLightning />
                <button>Тариф</button>
              </div>
            </Link>
            <Link to="/profile/setting">
              <div className="flex items-center gap-4 rounded justify-start hover:bg-[#F3F5FC] p-2 my-2">
                <AiOutlineSetting />
                <button>Настройки аккаунта</button>
              </div>
            </Link>
          </div>
        </aside>

        {/* Main Content */}
        <main className="col-span-1 sm:col-span-2 lg:col-span-4 bg-white rounded-lg shadow-lg p-8 m-4">
          <Routes>
            <Route
              path="/profile/favorite"
              element={
                <>
                  <PageTitle title="favorite" />
                  <Favorite />
                </>
              }
            />
            <Route
              path="/profile/message"
              element={
                <>
                  <PageTitle title="message" />
                  <Message />
                </>
              }
            />
            <Route
              path="/profile/update"
              element={
                <>
                  <PageTitle title="update" />
                  <Update />
                </>
              }
            />
            <Route
              path="/profile/rate"
              element={
                <>
                  <PageTitle title="rate" />
                  <Rate />
                </>
              }
            />
            <Route
              path="/profile/setting"
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
